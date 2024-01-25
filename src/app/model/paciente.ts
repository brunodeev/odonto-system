import { Consulta } from "./consulta";

export class Paciente {
    id!: number;
    nome!: string;
    telefone!: string;
    endereco!: string;
    email!: string;
    consultas?: Consulta[];
}