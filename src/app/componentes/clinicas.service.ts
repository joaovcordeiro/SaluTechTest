import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clinica } from '../../Interfaces/ClinicaInterface';

@Injectable({
  providedIn: 'root',
})
export class ClinicasService {
  private readonly API = 'http://localhost:3000/clinicas';

  constructor(private http: HttpClient) {}

  listar(): Observable<Clinica[]> {
    return this.http.get<Clinica[]>(this.API);
  }

  incluir(clinica: Clinica): Observable<Clinica> {
    return this.http.post<Clinica>(this.API, clinica);
  }

  listarPorId(id: number): Observable<Clinica> {
    const url = `${this.API}/${id}`;
    return this.http.get<Clinica>(url);
  }

  alterar(clinica: Clinica): Observable<Clinica> {
    const url = `${this.API}/${clinica.id}`;
    return this.http.put<Clinica>(url, clinica);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.API}/${id}`;
    return this.http.delete(url);
  }

  showMessage(msg: string): void {
    alert(msg);
  }
}
