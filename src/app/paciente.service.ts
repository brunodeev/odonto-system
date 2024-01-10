import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  pacientes: any[] = [
    {
      id: 1,
      nome: 'Bruna Nathália',
      servico: 'Prótese'
    },
    {
      id: 2,
      nome: 'Rafael José',
      servico: 'Aparelho'
    },
    {
      id: 3,
      nome: 'Ana Júlia Pereira',
      servico: 'Cirurgia'
    },
    {
      id: 4,
      nome: 'Juliano Gonçalves',
      servico: 'Avaliação'
    },
    {
      id: 5,
      nome: 'Bruna Nathália',
      servico: 'Prótese'
    },
    {
      id: 6,
      nome: 'Rafael José',
      servico: 'Aparelho'
    },
    {
      id: 7,
      nome: 'Ana Júlia Pereira',
      servico: 'Cirurgia'
    },
    {
      id: 8,
      nome: 'Juliano Gonçalves',
      servico: 'Avaliação'
    }
  ];

  getPacientes() {
    return this.pacientes;
  }

  getPaciente(id: number) {
    for(let i = 0; i < this.pacientes.length; i++) {
      let paciente = this.pacientes[i];
      
      if(id == paciente.id) {
        return paciente;
      }
    }
    return null;
  }

  constructor() { }
}
