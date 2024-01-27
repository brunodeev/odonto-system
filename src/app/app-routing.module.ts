import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './paciente/pacientes/pacientes.component';
import { PacienteDetalhesComponent } from './paciente/paciente-detalhes/paciente-detalhes.component';
import { NovoPacienteComponent } from './paciente/novo-paciente/novo-paciente.component';
import { PacienteResolver } from './guards/paciente.resolver';

const routes: Routes = [
  {path: '', component: PacientesComponent},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'pacientes/novo', component: NovoPacienteComponent, resolve: { paciente: PacienteResolver }},
  {path: 'pacientes/editar/:id', component: NovoPacienteComponent, resolve: { paciente: PacienteResolver }},
  {path: 'pacientes/:id', component: PacienteDetalhesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
