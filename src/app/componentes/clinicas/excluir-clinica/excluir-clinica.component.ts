import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinica } from 'src/Interfaces/ClinicaInterface';
import { ClinicasService } from '../../clinicas.service';

@Component({
  selector: 'app-excluir-clinica',
  templateUrl: './excluir-clinica.component.html',
  styleUrls: ['./excluir-clinica.component.sass'],
})
export class ExcluirClinicaComponent {
  clinica: Clinica = {
    nome: '',
    cnpj: '',
    especialidade: '',
    telefone: '',
    cep: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    status: '',
    preco: 0,
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

  excluir() {
    if (this.clinica.id) {
      this.service.excluir(this.clinica.id).subscribe(() => {
        this.service.showMessage('Clínica excluída com sucesso!');
        this.router.navigate(['/clinicas']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/clinicas']);
  }
}
