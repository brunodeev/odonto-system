import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private API = '/api/api/clientes';

  constructor(private http: HttpClient) { }


  getPacientes() {
    return this.http.get<Paciente[]>(this.API);
  }

  getPaciente(id: number) {
    return this.http.get<Paciente>(`${this.API}/${id}`);
  }

  deletarPaciente(id: string) {
    return this.http.delete(`${this.API}/${id}`);
  }

  salvar(record: Partial<Paciente>) {
    console.log(record);
    if(record.id) {
      console.log('update');
      return this.updatePaciente(record);
    }
    console.log('create');
    return this.newPaciente(record);
  }

  private newPaciente(record: Partial<Paciente>) {
    return this.http.post<Paciente>(this.API, record);
  }

  private updatePaciente(record: Partial<Paciente>) {
    return this.http.put<Paciente>(`${this.API}/${record.id}`, record);
  }
  
}
