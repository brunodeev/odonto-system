import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from './paciente/paciente';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private API = '/api/cliente';
  // {
  //   id: 1,
  //   nome: 'Bruno César',
  //   telefone: "999999999",
  //   endereco: "QA 0 MR 12 07 OESTE",
  //   email: "bruno@gmail.com",
  // },

  constructor(private http: HttpClient) { }


  getPacientes() {
    return this.http.get<Paciente[]>(this.API);
  }

  // getPacientes() {
  //   return this.pacientes;
  // }

  // getPacienteFiltrado(filtro: String) {
  //   this.pacientes!.filter((p: any) => {
  //     for(let i = 0; i < this.pacientes.length; i++) {
  //       let resultado = this.pacientes[i].nome;
  //       if(resultado == filtro) {
  //         return p;
  //       }
  //     }
  //     return null;
  //   })
  // }

  // getPaciente(id: number) {
  //   for(let i = 0; i < this.pacientes.length; i++) {
  //     let paciente = this.pacientes[i];
      
  //     if(id == paciente.id) {
  //       return paciente;
  //     }
  //   }
  //   return null;
  // }

  
}
