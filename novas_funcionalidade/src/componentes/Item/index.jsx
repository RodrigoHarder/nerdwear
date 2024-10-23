import { useRecoilState, useRecoilValue } from 'recoil';
import { quantidadeDeProdutos, precoDeProdutos, camisetaEstado } from '../../state/atom';
import { obterCarrinho, adicionarItemAoCarrinho, atualizarItemNoCarrinho, removerItemDoCarrinho } from '../../api/carrinhoAPI';
import './Item.css';
import { quantidadeValida } from '../../state/selector';

export default function Item({ id }) {
  const [quantidade, setQuantidade] = useRecoilState(quantidadeDeProdutos(id));
  const preco = useRecoilValue(precoDeProdutos(id));
  const [camiseta, setCamiseta] = useRecoilState(camisetaEstado(id));
  const limiteDeProdutos = useRecoilValue(quantidadeValida);

  const atualizarCarrinho = async (novaQuantidade) => {
    try {
      if (limiteDeProdutos(novaQuantidade)) {
        setQuantidade(novaQuantidade);
        const resposta = await obterCarrinho();
        const itemExistente = resposta.find(item => item.id === String(id));

        if (itemExistente) {
          if (novaQuantidade <= 0) {
            await removerItemDoCarrinho(itemExistente.id);
          } else {
            await atualizarItemNoCarrinho(itemExistente, novaQuantidade, camiseta.tamanho, camiseta.cor);
          }
        } else {
          await adicionarItemAoCarrinho(id, novaQuantidade, camiseta.tamanho, camiseta.cor); 
        }
      } else {
        alert("A quantidade máxima de itens foi atingida. Por favor, escolha uma quantidade menor.");
      }
    } catch (error) {
      console.error("Erro ao atualizar o carrinho:", error.response?.data || error.message);
    }
  }

  return (
    <div className='item'>
      <h3>Estampa {id}:</h3>
      <p> R$ {(quantidade * preco).toFixed(2)}</p>
      <div>
        <button onClick={() => quantidade > 0 && atualizarCarrinho(quantidade - 1)}>-</button>
        <p>{quantidade}</p>
        <button onClick={() => atualizarCarrinho(quantidade + 1)}>+</button>
      </div>
      <div>
        <label htmlFor='tamanho'>Tamanho:</label>
        <select id='tamanho' value={camiseta.tamanho} onChange={(e) => setCamiseta({ ...camiseta, tamanho: e.target.value })} className='caixa-de-selecao'>
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="G">G</option>
        </select>
      </div>
      <div>
        <label htmlFor='cor'>Cor:</label>
        <select id='cor' value={camiseta.cor} onChange={(e) => setCamiseta({ ...camiseta, cor: e.target.value })} className='caixa-de-selecao'>
          <option value="Branco">Branco</option>
          <option value="Preto">Preto</option>
          <option value="Azul">Azul</option>
        </select>
      </div>
    </div>
  );
}

