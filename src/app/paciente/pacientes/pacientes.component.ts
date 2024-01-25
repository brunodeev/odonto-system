import { Component } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../model/paciente';
import { Router } from '@angular/router';

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

  constructor(
    private pacienteService: PacienteService,
    private router: Router) {}

  ngOnInit() {
    this.pacienteService.getPacientes().subscribe((res) => this.pacientes = res);
    this.pacienteService.getPacientes().subscribe((res) => this.pacientesFiltrados = res);
  }

  filtrarPorNome() {
    this.pacientesFiltrados = this.pacientes;
    if(this.textoFiltro === '') {
      return this.pacientes;
    } else {
      let filtroMinusculo = this.textoFiltro.toLowerCase();
      return this.pacientes?.filter((paciente) => {
        return paciente.nome.toLowerCase().indexOf(filtroMinusculo) != -1;
      })
    }
  }

}
