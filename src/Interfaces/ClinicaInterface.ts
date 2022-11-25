export interface Clinica {
  id?: number;
  nome: string;
  cnpj: string;
  especialidade: string;
  telefone: string;
  cep: string;
  endereco: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  status: 'Ativo' | 'Inativo' | '';
  preco: number | undefined;
  atendimento: {
    inicio: string;
    fim: string;
  };
}
