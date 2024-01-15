import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../paciente/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private API = '/api/cliente';

  constructor(private http: HttpClient) { }


  getPacientes() {
    return this.http.get<Paciente[]>(this.API);
  }

  getPaciente(id: number) {
    return this.http.get<Paciente>(`${this.API}/${id}`)
  }

  newPaciente(record: Partial<Paciente>) {
    return this.http.post<Paciente>(this.API, record);
  }
  
}
