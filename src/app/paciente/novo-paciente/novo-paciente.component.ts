import { Component } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../paciente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-paciente',
  templateUrl: './novo-paciente.component.html',
  styleUrl: './novo-paciente.component.css'
})
export class NovoPacienteComponent {

  paciente?: Paciente;
  nome?: string;
  telefone?: string;
  endereco?: string;
  email?: string;
  urlImage?: string;

  constructor(
    private pacienteService: PacienteService,
    private router: Router) {}

  addNovoPaciente() {
    this.paciente!.nome = this.nome!;
    this.paciente!.telefone = this.telefone!;
    this.paciente!.endereco = this.endereco!;
    this.paciente!.email = this.email!;
    this.paciente!.urlImage = this.urlImage!;
    if(this.paciente != undefined) {
      this.pacienteService.newPaciente(this.paciente!);
      this.router.navigate(['pacientes']);
    }
    
  }
}
