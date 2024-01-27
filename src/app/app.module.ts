import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientesComponent } from './paciente/pacientes/pacientes.component';
import { PacienteDetalhesComponent } from './paciente/paciente-detalhes/paciente-detalhes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NovoPacienteComponent } from './paciente/novo-paciente/novo-paciente.component';
import { EditarPacienteComponent } from './paciente/editar-paciente/editar-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    PacienteDetalhesComponent,
    NovoPacienteComponent,
    EditarPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
