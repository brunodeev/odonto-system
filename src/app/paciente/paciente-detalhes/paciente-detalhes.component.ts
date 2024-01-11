import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PacienteService } from '../../paciente.service';
import { Paciente } from '../paciente';

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
    private pacienteService: PacienteService
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.findById(this.id);

      // this.paciente = this.pacienteService.getPaciente(this.id);

      // console.log(this.paciente)

      // if(this.paciente == null) {
      //   this.router.navigate(['/pacientes']);
      // }
    })
  }

  findById(id: number) {
    this.pacienteService.getPaciente(id).subscribe((res) => {
      this.paciente! = res;
    })
  }

}
