import { Estudante } from "./estudante.model";
import { Protocolo } from "./protocolo.model";

export class Disciplina {

	public static main(): void {
        const estudantes: Estudante[] = [];
        const protocolos: Protocolo[] = [];

		estudantes.push(new Estudante(1,"João Alberto","Medicina",0,0,0,"Inativo" ));
		estudantes.push(new Estudante(2, "Maria Santana", "Dança", 0, 0, 0,"Ativo"));
		estudantes.push(new Estudante(3,"Cassío Melo","Direito",0,0,0,"Ativo"));

		protocolos.push(new Protocolo(1,"APROVEITAMENTO DE ESTUDOS ",new Date(),new Date(),false));
		protocolos.push(new Protocolo(2,"TRANCAMENTO PARCIAL DE DISCIPLINAS",new Date(),new Date(),false));
		protocolos.push(new Protocolo(3,"TRANCAMENTO TOTAL DE DISCIPLINAS ",new Date(),new Date(),false));
		protocolos.push(new Protocolo(4,"ADICIONAR ATIVIDADES COMPLEMENTARES",new Date(),new Date(),false));
		protocolos.push(new Protocolo(5,"MUDANÇA DE CURSO",new Date(),new Date(),false));

		estudantes[1].abrir();
		estudantes[1].fechar();
		estudantes[0].abrir();
		estudantes[0].cancelar();
		estudantes[2].fechar();
		estudantes[2].cancelar();
		estudantes[1].statusEstd();
		estudantes[0].statusEstd();
		estudantes[2].statusEstd();
	}
}
