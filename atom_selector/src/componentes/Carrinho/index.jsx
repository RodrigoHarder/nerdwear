import { useRecoilValue } from 'recoil';
import { totalDeItens, totalPreco } from '../../state/selector';
import './Carrinho.css';
import Item from '../Item';

export default function Carrinho() {
  const total = useRecoilValue(totalDeItens);
  const precoTotal = useRecoilValue(totalPreco);

  return (
    <div className='carrinho'>
      <Item id={1} />
      <Item id={2} />
      <h3>Itens no carrinho: {total}</h3>
      <h3>Total: R$ {precoTotal.toFixed(2)}</h3>
    </div>
  );
}
