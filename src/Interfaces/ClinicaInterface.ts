export interface Clinica {
  id?: number;
  nome: string;
  cnpj: string;
  especialidade: string;
  telefone: string;
  cep: string;
  endereço: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  status: 'Ativo' | 'Inativo' | '';
  preço: number;
  atendimento: {
    inicio: string;
    fim: string;
  };
}
