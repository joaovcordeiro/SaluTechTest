import { ClinicasService } from './../../clinicas.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinica } from 'src/Interfaces/ClinicaInterface';

@Component({
  selector: 'app-editar-clinica',
  templateUrl: './editar-clinica.component.html',
  styleUrls: ['./editar-clinica.component.sass'],
})
export class EditarClinicaComponent {
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

  constructor(
    private service: ClinicasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.listarPorId(parseInt(id!)).subscribe((clinica) => {
      this.clinica = clinica;
    });
  }

  editar() {
    this.service.alterar(this.clinica).subscribe(() => {
      this.service.showMessage('Clínica editada com sucesso!');
      this.router.navigate(['/clinicas']);
    });
  }

  cancelar() {
    this.router.navigate(['/clinicas']);
  }
}
