import { useRecoilValue, useSetRecoilState } from 'recoil';
import { totalDeItens, valorTotalCarrinho, validarCupomSelector } from '../../state/selector';
import { cupomState } from '../../state/atom';
import Item from '../Item';
import './Carrinho.css';

export default function Carrinho() {
  const idProdutos = [1, 2];
  const totalItens = useRecoilValue(totalDeItens(idProdutos));
  const valorTotal = useRecoilValue(valorTotalCarrinho(idProdutos));
  const setCupom = useSetRecoilState(cupomState);
  const { mensagem } = useRecoilValue(validarCupomSelector);

  const aplicarCupom = () => {
    setCupom((prev) => ({
      ...prev,
      cupomFoiSubmetido: true,
    }));
  }

  return (
    <div className='carrinho'>
      {idProdutos.map((id) => (
        <Item key={id} id={id} />
      ))}
      <h3>Itens no carrinho: {totalItens}</h3>
      <h3>Valor total: R$ {valorTotal.toFixed(2)}</h3>

      <div className='cupom'>
        <input
          type="text"
          placeholder="Insira o código do cupom"
          onChange={(e) => setCupom((prev) => ({
            ...prev,
            codigoDeDesconto: e.target.value
          }))} 
        />
        <button onClick={aplicarCupom}>Aplicar Cupom</button>
      </div>
      <p>{mensagem}</p>
    </div>
  )
}
