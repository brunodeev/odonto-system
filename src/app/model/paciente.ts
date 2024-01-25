import { Consulta } from "./consulta";

export interface Paciente {
    id: string;
    nome: string;
    telefone: string;
    endereco: string;
    email: string;
    consultas: Consulta[];
}