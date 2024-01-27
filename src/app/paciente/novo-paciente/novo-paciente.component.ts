import { Component } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../model/paciente';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, UntypedFormArray } from '@angular/forms';
import { Consulta } from '../../model/consulta';

@Component({
  selector: 'app-novo-paciente',
  templateUrl: './novo-paciente.component.html',
  styleUrl: './novo-paciente.component.css'
})
export class NovoPacienteComponent {

  form!: FormGroup;

  constructor(
    private pacienteService: PacienteService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    const paciente: Paciente = this.route.snapshot.data['paciente'];
    this.form = this.formBuilder.group({
      id: [paciente.id],
      nome: [paciente.nome],
      telefone: [paciente.telefone],
      endereco: [paciente.endereco],
      email: [paciente.email],
      consultas: this.formBuilder.array([])
    });

    this.adicionarNovaConsulta();
  }

  private obterConsultas(paciente: Paciente) {
    const consultas = [];
    if(paciente?.consultas) {
      paciente.consultas.forEach(consulta => consultas.push(this.criarConsulta(consulta)));
    } else {
      consultas.push(this.criarConsulta());
    }
    return consultas;
  }

  private criarConsulta(consulta: Consulta = {id: '', servico: '', dataHora: ''}): FormGroup {
    return this.formBuilder.group({
      id: [consulta.id],
      servico: [consulta.servico],
      dataHora: [consulta.dataHora]
    });
  }

  obterConsultasFormArrray(): FormArray {
    return this.form.get('consultas') as FormArray;
  }

  adicionarNovaConsulta() {
    const consultas = this.form.get('consultas') as FormArray;
    consultas.push(this.criarConsulta());
  }

  deletarConsulta(index: number) {
    const consultas = this.form.get('consultas') as UntypedFormArray;
    consultas.removeAt(index);
  }
  
  onSubmit() {
    if (this.form.valid) {
      const pacienteData: Partial<Paciente> = {
        nome: this.form.value.nome as string,
        telefone: this.form.value.telefone as string,
        endereco: this.form.value.endereco as string,
        email: this.form.value.email as string,
        consultas: this.form.value.consultas.map((consulta: any) => {
          return {
            id: consulta.id as string,
            servico: consulta.servico as string,
            dataHora: consulta.dataHora as string
          };
        })
      };

      this.router.navigate(['/pacientes']);
  
      this.pacienteService.newPaciente(pacienteData).subscribe(result => console.log(result));
    }
  }
}
