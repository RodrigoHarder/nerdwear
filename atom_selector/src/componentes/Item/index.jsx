import { useRecoilState } from 'recoil';
import { produto1, produto2 } from '../../state/atom';
import './Item.css';

export default function Item({ id }) {
  const [produto, setProduto] = useRecoilState(id === 1 ? produto1 : produto2);

  const precoTotal = produto.quantidade * produto.preco;

  return (
    <div className='item'>
      <h3>Estampa {id}:</h3>
      <p>R$ {precoTotal.toFixed(2)}</p>
      <div>
        <button onClick={() => setProduto({ ...produto, quantidade: produto.quantidade > 0 ? produto.quantidade - 1 : 0 })}>-</button>
        <p>{produto.quantidade}</p>
        <button onClick={() => setProduto({ ...produto, quantidade: produto.quantidade + 1 })}>+</button>
      </div>
    </div>
  );
}
