import { Component } from '@angular/core';
import { PacienteService } from '../../paciente.service';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent {

  pacientes?: Paciente[];

  filtro: string = '';
  pacientesFiltrados?: Paciente[];

  get textoFiltro() {
    return this.filtro;
  }

  set textoFiltro(valor: string) {
    this.filtro = valor;
    this.pacientesFiltrados = this.filtrarPorNome();
  }


  constructor(private pacienteService: PacienteService) {}

  ngOnInit() {
    this.pacienteService.getPacientes().subscribe((res) => this.pacientes = res);
    this.pacientesFiltrados = this.pacientes;
  }
  

  filtrarPorNome() {
    if(this.pacientes!.length == 0 || this.textoFiltro === '') {
      return this.pacientes;
    } else {
      let filtroMinusculo = this.textoFiltro.toLowerCase();
      return this.pacientes?.filter((paciente) => {
        return paciente.nome.toLowerCase().indexOf(filtroMinusculo) != -1;
      })
    }
  }

}
