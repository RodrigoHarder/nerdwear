import { selectorFamily } from 'recoil';
import { quantidadeDeProdutos, precoDeProdutos } from './atom';

export const totalDeItens = selectorFamily({
  key: 'totalDeItens',
  get: (idDosProdutos) => ({ get }) => {
    return idDosProdutos.reduce((total, id) => total + get(quantidadeDeProdutos(id)), 0);
  }
});

export const valorTotalCarrinho = selectorFamily({
  key: 'valorTotalCarrinho',
  get: (idDosProdutos) => ({ get }) => {
    return idDosProdutos.reduce((total, id) => {
      const quantidade = get(quantidadeDeProdutos(id));
      const preco = get(precoDeProdutos(id));
      return total + quantidade * preco;
    }, 0)
  }
})