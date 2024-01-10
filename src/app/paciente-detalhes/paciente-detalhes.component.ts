import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-paciente-detalhes',
  templateUrl: './paciente-detalhes.component.html',
  styleUrl: './paciente-detalhes.component.css'
})
export class PacienteDetalhesComponent {

  id!: number;
  subscription?: Subscription;
  paciente?: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacienteService: PacienteService
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.paciente = this.pacienteService.getPaciente(this.id);

      if(this.paciente == null) {
        this.router.navigate(['/pacientes']);
      }
    })
  }

}
