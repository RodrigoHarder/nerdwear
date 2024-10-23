import { useRecoilValue } from 'recoil';
import { totalDeItens, valorTotalCarrinho } from '../../state/selector';
import Item from '../Item';
import './Carrinho.css';

export default function Carrinho() {
  const idProdutos = [1, 2];
  const totalItens = useRecoilValue(totalDeItens(idProdutos));
  const valorTotal = useRecoilValue(valorTotalCarrinho(idProdutos));

  return (
    <div className='carrinho'>
      {idProdutos.map((id) => (
        <Item key={id} id={id} />
      ))}
      <h3>Itens no carrinho: {totalItens}</h3>
      <h3>Valor total: R$ {valorTotal.toFixed(2)}</h3>
    </div>
  );
}
