import { Component } from '@angular/core';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent {

  pacientes?: any[];

  constructor(private pacienteService: PacienteService) {}

  ngOnInit() {
    this.pacientes = this.pacienteService.getPacientes();
  }

}
