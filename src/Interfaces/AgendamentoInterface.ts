import { Clinica } from './ClinicaInterface';

export interface Agendamento {
  id: number;
  paciente: string;
  idClinica: number;
  dia: string;
  hora: string;
  clinicas: Clinica;
}
