import { Clinica } from './../../../../Interfaces/ClinicaInterface';
import { Component } from '@angular/core';
import { ClinicasService } from '../../clinicas.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-listar-clinicas',
  templateUrl: './listar-clinicas.component.html',
  styleUrls: ['./listar-clinicas.component.sass'],
})
export class ListarClinicasComponent {
  listaClinicas: Clinica[] = [];
  displayedColumns: string[] = [
    'nome',
    'cnpj',
    'especialidade',
    'telefone',
    'cep',
    'endereço',
    'numero',
    'bairro',
    'cidade',
    'estado',
    'status',
    'preço',
  ];
  constructor(private service: ClinicasService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((clinicas) => {
      this.listaClinicas = clinicas;
    });
  }
}
