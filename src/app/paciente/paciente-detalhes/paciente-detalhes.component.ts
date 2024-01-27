import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../model/paciente';

@Component({
  selector: 'app-paciente-detalhes',
  templateUrl: './paciente-detalhes.component.html',
  styleUrl: './paciente-detalhes.component.css'
})
export class PacienteDetalhesComponent {

  id!: number;
  subscription?: Subscription;
  paciente?: Paciente;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacienteService: PacienteService,
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.findById(this.id);
    })
  };

  findById(id: number) {
    this.pacienteService.getPaciente(id).subscribe((res: Paciente) => {
      this.paciente! = res;
    })
  }

  editarPaciente(paciente: Paciente) {
    this.router.navigate(['pacientes/editar', paciente.id])
  }

  deletarPaciente(paciente: Paciente) {
    this.pacienteService.deletarPaciente(paciente.id).subscribe();
    this.router.navigate(['pacientes']);
  }

}
