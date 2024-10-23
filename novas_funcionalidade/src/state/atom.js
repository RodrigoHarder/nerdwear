import { atom, atomFamily } from 'recoil';

export const quantidadeDeProdutos = atomFamily({
  key: 'quantidadeDeProdutos',
  default: 1
})

export const quantidadeLimite = atom({
  key: 'quantidadeLimite',
  default: 5
});

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

export const camisetaEstado = atomFamily({
  key: 'camisetaEstado',
  default: {
    tamanho: 'M',
    cor: 'Branco'
  }
});

export const cupomState = atom({
  key: 'cupomState',
  default: () => ({
    codigoDeDesconto: '',
    cupomFoiSubmetido: false,
  }),
});
