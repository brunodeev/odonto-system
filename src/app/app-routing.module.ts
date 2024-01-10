import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacienteDetalhesComponent } from './paciente-detalhes/paciente-detalhes.component';

const routes: Routes = [
  {path: 'pacientes', component: PacientesComponent},
  {path: 'pacientes/:id', component: PacienteDetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
