import { atomFamily } from 'recoil';

export const quantidadeDeProdutos = atomFamily({
  key: 'quantidadeDeProdutos',
  default: 0
})

export const precoDeProdutos = atomFamily({
  key: 'precoDeProdutos',
  default: (id) => {
    const precos = {
      1: 20.0,
      2: 35.5
    };
    return precos[id] || 10.0;
  }
})