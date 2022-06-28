import { Protocolo } from "models/protocolo.model";
import { QueryResult } from "pg";
import db from '../db';

export class RequerimentoService {
    async encontraRequerimentos(): Promise<Protocolo[]> {
        const consultaRequerimentos = await db.query('SELECT * from protocolos');
        const requerimentos = consultaRequerimentos.rows as Protocolo[];
        return requerimentos;
    }

    async encontraRequerimentoById(id: number): Promise<Protocolo> {
        const consultaRequerimento = await db.query(`SELECT * FROM protocolos WHERE id = ${id}`);
        const requerimento = consultaRequerimento.rows[0] as Protocolo;
        return requerimento;
    }

    async postaRequerimento(requerimento: Protocolo): Promise<Protocolo> {
        let consultaRequerimento: QueryResult<any>;

        if (!requerimento.getFuncionarioNome()) {
            consultaRequerimento = await db.query(`INSERT INTO Protocolos (Id, DNome, DataCadastro, DataAtualizacao, Status, FNome) VALUES (${requerimento.getIdProtocolo()},'${requerimento.getNomeProtocolo()}','${requerimento.getDataCadastro()}', '${requerimento.getDataAtualizacao()}','${requerimento.getStProtocolo()}') RETURNING *`);
        } else {
            consultaRequerimento = await db.query(`INSERT INTO Protocolos (Id, DNome, DataCadastro, DataAtualizacao, Status, FNome) VALUES (${requerimento.getIdProtocolo()},'${requerimento.getNomeProtocolo()}','${requerimento.getDataCadastro()}', '${requerimento.getDataAtualizacao()}','${requerimento.getStProtocolo()}', '${requerimento.getFuncionarioNome()}') RETURNING *`);
        }

        const requerimentoSalvo = consultaRequerimento.rows[0] as Protocolo;
        return requerimentoSalvo;
    }

    async deletaRequerimento(id: number): Promise<void> {
        await db.query(`DELETE FROM Protocolos WHERE id = ${id}`);
    }
}
