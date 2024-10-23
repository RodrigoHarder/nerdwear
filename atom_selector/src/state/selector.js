import { selector } from 'recoil';
import { produto1, produto2 } from './atom';

export const totalDeItens = selector({
  key: 'totalDeItens',
  get: ({ get }) => {
    const p1 = get(produto1).quantidade;
    const p2 = get(produto2).quantidade;
    return p1 + p2;
  }
})

export const totalPreco = selector({
  key: 'totalPreco',
  get: ({ get }) => {
    const p1 = get(produto1);
    const p2 = get(produto2);
    const totalP1 = p1.quantidade * p1.preco;
    const totalP2 = p2.quantidade * p2.preco;
    return totalP1 + totalP2;
  }
})
