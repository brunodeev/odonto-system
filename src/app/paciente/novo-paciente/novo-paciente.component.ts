import { Component } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../paciente';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

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
    };
    this.pacienteService.newPaciente(pacienteData).subscribe(result => console.log(result));
  }
}
