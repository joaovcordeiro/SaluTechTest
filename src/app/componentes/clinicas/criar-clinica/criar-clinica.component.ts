import { Clinica } from 'src/Interfaces/ClinicaInterface';
import { Router } from '@angular/router';
import { ClinicasService } from './../../clinicas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-clinica',
  templateUrl: './criar-clinica.component.html',
  styleUrls: ['./criar-clinica.component.sass'],
})
export class CriarClinicaComponent {
  constructor(private service: ClinicasService, private router: Router) {}

  clinica: Clinica = {
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
    preço: 0,
    atendimento: {
      inicio: '',
      fim: '',
    },
  };

  incluirClinica() {
    this.service.incluir(this.clinica).subscribe(() => {
      this.router.navigate(['/clinicas']);
    });
  }

  cancelar() {
    this.router.navigate(['/clinicas']);
  }
}
