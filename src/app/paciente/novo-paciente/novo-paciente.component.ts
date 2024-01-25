import { Component } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../model/paciente';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Consulta } from '../../model/consulta';

@Component({
  selector: 'app-novo-paciente',
  templateUrl: './novo-paciente.component.html',
  styleUrl: './novo-paciente.component.css'
})
export class NovoPacienteComponent {

  paciente?: Paciente;
  form = this.formBuilder.group({
    nome: [''],
    telefone: [''],
    endereco: [''],
    email: [''],
    servico: [''],
  });

  constructor(
    private pacienteService: PacienteService,
    private formBuilder: FormBuilder) {}

  ngOnInit() {}
  
  onSubmit() {
    const pacienteData: Partial<Paciente> = {
      nome: this.form.value.nome as string,
      telefone: this.form.value.telefone as string,
      endereco: this.form.value.endereco as string,
      email: this.form.value.email as string,
      consultas: this.form.value.servico as Consulta[]
    };
    this.pacienteService.newPaciente(pacienteData).subscribe(result => console.log(result));
  }
}
