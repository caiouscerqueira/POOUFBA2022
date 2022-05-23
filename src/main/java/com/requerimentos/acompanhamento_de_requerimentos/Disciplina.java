package com.requerimentos.acompanhamento_de_requerimentos;

import java.util.Date;

public class Disciplina {

	public static void main(String[] args) {
		Estudante c[] = new Estudante[3];
		c[0] = new Estudante(1,"João Alberto","Medicina",0,0,0,"Inativo" );
		c[1] = new Estudante(2, "Maria Santana", "Dan�a", 0, 0, 0,"Ativo");
		c[2] = new Estudante(3,"Cassío Melo","Direito",0,0,0,"Ativo");

		Protocolo p[] = new Protocolo[5];
		p[0] = new Protocolo(1,"APROVEITAMENTO DE ESTUDOS ",new Date(),new Date(),false);
		p[1] = new Protocolo(2,"TRANCAMENTO PARCIAL DE DISCIPLINAS",new Date(),new Date(),false);
		p[2] = new Protocolo(3,"TRANCAMENTO TOTAL DE DISCIPLINAS ",new Date(),new Date(),false);
		p[3] = new Protocolo(4,"ADICIONAR ATIVIDADES COMPLEMENTARES",new Date(),new Date(),false);
		p[4] = new Protocolo(5,"MUDANÇA DE CURSO",new Date(),new Date(),false);

		c[1].abrir();
		c[1].fechar();
		c[0].abrir();
		c[0].cancelar();
		c[2].fechar();
		c[2].cancelar();
		c[1].status();
		c[0].status();
		c[2].status();
	}
}
