import { Protocolo } from "models/protocolo.model";
import { RequerimentoService } from "services/requerimento.service";

export class RequerimentoController {
    constructor(private service: RequerimentoService) {}

    async listaRequerimentos(): Promise<Protocolo[]> {
        return await this.service.encontraRequerimentos();
    }

    async retornaRequerimento(id: number): Promise<Protocolo> {
        return await this.service.encontraRequerimentoById(id);
    }

    async criaRequerimento(requerimento: Protocolo): Promise<Protocolo> {
        return await this.service.postaRequerimento(requerimento);
    }

    async removeRequerimento(id: number): Promise<void> {
        return await this.service.deletaRequerimento(id);
    }
}
