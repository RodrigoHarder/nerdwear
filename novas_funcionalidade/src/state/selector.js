import {  selector, selectorFamily } from 'recoil';
import { quantidadeDeProdutos, precoDeProdutos, quantidadeLimite, cupomState} from './atom';

export const totalDeItens = selectorFamily({
  key: 'totalDeItens',
  get: (idDosProdutos) => ({ get }) => {
    return idDosProdutos.reduce((total, id) => total + get(quantidadeDeProdutos(id)), 0);
  }
});

export const validarCupomSelector = selector({
  key: 'validarCupomSelector',
  get: ({ get }) => {
    const { codigoDeDesconto, cupomFoiSubmetido } = get(cupomState);
    const valido = cupomFoiSubmetido && codigoDeDesconto === 'DESCONTO10';
    const mensagem = valido
      ? 'Cupom de desconto aplicado!'
      : cupomFoiSubmetido
      ? 'Cupom inválido!'
      : '';
    return { valido, mensagem };
  },
});

export const valorTotalCarrinho = selectorFamily({
  key: 'valorTotalCarrinho',
  get: (idDosProdutos) => ({ get }) => {
    const totalBruto = idDosProdutos.reduce((total, id) => {
      const quantidade = get(quantidadeDeProdutos(id));
      const preco = get(precoDeProdutos(id));
      return total + quantidade * preco;
    }, 0);
    
    const { valido } = get(validarCupomSelector);
    if (valido) {
      return totalBruto * 0.9;
    }
    return totalBruto;
  },
});

export const quantidadeValida = selector({
  key: 'quantidadeValida',

    // Retorna um objeto com duas propriedades: "valido" e "mensagem"
  get: ({ get }) => (qtdAtual) => {
    const maxQuantidade = get(quantidadeLimite);
    return qtdAtual <= maxQuantidade;
  },
});