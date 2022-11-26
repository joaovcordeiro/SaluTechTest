import { Router } from '@angular/router';
import { ClinicasService } from './../../clinicas.service';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-criar-clinica',
  templateUrl: './criar-clinica.component.html',
  styleUrls: ['./criar-clinica.component.sass'],
})
export class CriarClinicaComponent {
  constructor(private service: ClinicasService, private router: Router) {}

  formularioClinica!: FormGroup;

  ngOnInit(): void {
    this.formularioClinica = new FormGroup({
      nome: new FormControl('', Validators.required),
      especialidade: new FormControl('', Validators.required),
      cnpj: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      cep: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      bairro: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      preco: new FormControl('', Validators.required),
      atendimento: new FormGroup({
        inicio: new FormControl('', Validators.required),
        fim: new FormControl('', Validators.required),
      }),
    });
  }

  get nome() {
    return this.formularioClinica.get('nome')!;
  }

  get especialidade() {
    return this.formularioClinica.get('especialidade')!;
  }

  get cnpj() {
    return this.formularioClinica.get('cnpj')!;
  }

  get telefone() {
    return this.formularioClinica.get('telefone')!;
  }

  get cep() {
    return this.formularioClinica.get('cep')!;
  }

  get endereco() {
    return this.formularioClinica.get('endereco')!;
  }

  get numero() {
    return this.formularioClinica.get('numero')!;
  }

  get bairro() {
    return this.formularioClinica.get('bairro')!;
  }

  get cidade() {
    return this.formularioClinica.get('cidade')!;
  }

  get estado() {
    return this.formularioClinica.get('estado')!;
  }

  get status() {
    return this.formularioClinica.get('status')!;
  }

  get preco() {
    return this.formularioClinica.get('preco')!;
  }

  get inicio() {
    return this.formularioClinica.get('atendimento')?.get('inicio')!;
  }

  get fim() {
    return this.formularioClinica.get('atendimento')?.get('fim')!;
  }

  incluirClinica() {
    if (this.formularioClinica.valid) {
      this.service.incluir(this.formularioClinica.value).subscribe(() => {
        this.router.navigate(['/clinicas']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/clinicas']);
  }
}
