import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.sass'],
})
export class CabecalhoComponent {
  constructor(private router: Router) {}

  clinicas() {
    this.router.navigate(['/clinicas']);
  }

  agendamentos() {
    this.router.navigate(['/agendamentos']);
  }
}
