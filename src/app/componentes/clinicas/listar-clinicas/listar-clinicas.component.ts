import { Clinica } from './../../../../Interfaces/ClinicaInterface';
import { Component } from '@angular/core';
import { ClinicasService } from '../../clinicas.service';

@Component({
  selector: 'app-listar-clinicas',
  templateUrl: './listar-clinicas.component.html',
  styleUrls: ['./listar-clinicas.component.sass'],
})
export class ListarClinicasComponent {
  listaClinicas: Clinica[] = [];
  filtro: string = '';
  paginaAtual: number = 1;

  constructor(private service: ClinicasService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((clinicas) => {
      this.listaClinicas = clinicas;
    });
  }

  key: string = 'nome';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
