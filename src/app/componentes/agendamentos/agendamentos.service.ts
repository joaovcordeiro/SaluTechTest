import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agendamento } from 'src/Interfaces/AgendamentoInterface';

@Injectable({
  providedIn: 'root',
})
export class AgendamentosService {
  private readonly API = 'http://localhost:3000/agendamentos?_expand=clinicas';

  constructor(private http: HttpClient) {}

  listar(): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(this.API);
  }
}
