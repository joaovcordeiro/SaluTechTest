import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.sass'],
})
export class CabecalhoComponent {
  constructor(private router: Router) {}

  paginaAtual: string = 'clinicas';

  toogleMenuColor() {
    if (this.paginaAtual == 'clinicas') {
      return 'clinicas';
    } else {
      return 'agendamentos';
    }
  }

  clinicas() {
    this.router.navigate(['/clinicas']);
    this.paginaAtual = 'clinicas';
  }

  agendamentos() {
    this.router.navigate(['/agendamentos']);
    this.paginaAtual = 'agendamentos';
  }
}
