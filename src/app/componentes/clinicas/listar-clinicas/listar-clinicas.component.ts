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

  constructor(private service: ClinicasService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((clinicas) => {
      this.listaClinicas = clinicas;
      console.log(clinicas);
    });
  }
}
