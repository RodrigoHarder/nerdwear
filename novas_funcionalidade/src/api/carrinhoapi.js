import axios from 'axios';

const baseURL = 'http://localhost:3001/carrinho';

export const obterCarrinho = async () => {
  const resposta = await axios.get(baseURL);
  return resposta.data;
};

// Ajuste para adicionar tamanho e cor
export const adicionarItemAoCarrinho = async (id, quantidade, tamanho, cor) => {
  await axios.post(baseURL, {
    id: String(id),
    quantidade,
    tamanho, // Novo campo
    cor      // Novo campo
  });
  console.log("Adição bem-sucedida:", {
    id: String(id),
    quantidade,
    tamanho,
    cor
  });
};

// Ajuste para atualizar também o tamanho e a cor
export const atualizarItemNoCarrinho = async (itemExistente, novaQuantidade, novoTamanho, novaCor) => {
  await axios.put(`${baseURL}/${itemExistente.id}`, {
    ...itemExistente,
    quantidade: novaQuantidade,
    tamanho: novoTamanho,  // Atualizando o tamanho
    cor: novaCor           // Atualizando a cor
  });
  console.log("Atualização bem-sucedida:", {
    ...itemExistente,
    quantidade: novaQuantidade,
    tamanho: novoTamanho,
    cor: novaCor
  });
};

// Remover item do carrinho (sem alterações)
export const removerItemDoCarrinho = async (id) => {
  await axios.delete(`${baseURL}/${id}`);
  console.log(`Item ${id} removido do carrinho.`);
};
