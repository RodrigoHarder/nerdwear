import { useRecoilState, useRecoilValue } from 'recoil';
import { quantidadeDeProdutos, precoDeProdutos } from '../../state/atom';
import './Item.css';

export default function Item({ id }) {
  const [quantidade, setQuantidade] = useRecoilState(quantidadeDeProdutos(id));
  const preco = useRecoilValue(precoDeProdutos(id));

  return (
    <div className='item'>
      <h3>Estampa {id}:</h3>
      <p> R$ {(quantidade * preco).toFixed(2)}</p>
      <div>
        <button onClick={() => setQuantidade(quantidade > 0 ? quantidade - 1 : 0)}>-</button>
        <p>{quantidade}</p>
        <button onClick={() => setQuantidade(quantidade + 1)}>+</button>
      </div>
    </div>
  )
}
