import { Component } from '@angular/core';
import { Agendamento } from 'src/Interfaces/AgendamentoInterface';
import { AgendamentosService } from '../agendamentos.service';

@Component({
  selector: 'app-listar-agendamentos',
  templateUrl: './listar-agendamentos.component.html',
  styleUrls: ['./listar-agendamentos.component.sass'],
})
export class ListarAgendamentosComponent {
  constructor(private service: AgendamentosService) {}

  listaAgendamentos: Agendamento[] = [];

  filtro: string = '';

  ngOnInit(): void {
    this.service.listar().subscribe((agendamentos) => {
      this.listaAgendamentos = agendamentos;
      console.log(agendamentos);
    });
  }
}
