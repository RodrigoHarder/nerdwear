import { atom } from 'recoil';

export const produto1 = atom({
  key: 'produto1',
  default: { quantidade: 0, preco: 20 }
})

export const produto2 = atom({
  key: 'produto2',
  default: { quantidade: 0, preco: 35 }
})

