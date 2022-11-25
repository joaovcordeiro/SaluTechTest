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
}
