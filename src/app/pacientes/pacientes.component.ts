import { Component } from '@angular/core';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent {

  pacientes?: any[];

  paciente?: any;
  filtro?: string;

  constructor(private pacienteService: PacienteService) {}

  ngOnInit() {
    this.pacientes = this.pacienteService.getPacientes();
  }

  getPacienteFiltrado() {
    return this.pacientes!.filter((p: string) => {
      if(p.toLowerCase().indexOf(this.filtro!.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    })
  }

}
