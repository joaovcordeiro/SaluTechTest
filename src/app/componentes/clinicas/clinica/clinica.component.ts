import { Component, Input } from '@angular/core';
import { Clinica } from 'src/Interfaces/ClinicaInterface';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.sass'],
})
export class ClinicaComponent {
  @Input() clinica: Clinica = {
    id: 0,
    nome: '',
    cnpj: '',
    especialidade: '',
    telefone: '',
    cep: '',
    endereço: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    status: '',
    preço: 100.0,
    atendimento: {
      inicio: '',
      fim: '',
    },
  };
}
