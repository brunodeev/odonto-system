import { Injectable } from "@angular/core";
import { PacienteService } from "../services/paciente.service";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { Paciente } from "../model/paciente";

@Injectable({
  providedIn: 'root'
})
export class PacienteResolver {
  constructor(private service: PacienteService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Paciente> {
    if(route.params && route.params['id']) {
      return this.service.getPaciente(route.params['id']);
    }
    return of({id: '', nome: '', telefone: '', email: '', endereco: '', consultas: []});
  }
}