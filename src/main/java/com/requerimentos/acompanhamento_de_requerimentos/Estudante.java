package com.requerimentos.acompanhamento_de_requerimentos;

public class Estudante {

	//Atributos
	private  int matricula;
	private String nome;
	private String curso;
	private int abre;
	private int fecha;
	private int cancela;
	private String status;

	public int getMatricula() {
		return matricula;
	}

	public void setMatricula(int matricula) {
		this.matricula = matricula;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCurso() {
		return curso;
	}

	public void setCurso(String curso) {
		this.curso = curso;
	}

	public int getAbre() {
		return abre;
	}

	public void setAbre(int abre) {
		this.abre = abre;
	}

	public int getFecha() {
		return fecha;
	}

	public void setFecha(int fecha) {
		this.fecha = fecha;
	}

	public int getCancela() {
		return cancela;
	}

	public void setCancela(int cancela) {
		this.cancela = cancela;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	//Metodos publicos
	public void abrir(){
		this.setAbre(this.getAbre() + 1);
	}

	public void fechar(){
		this.setFecha(this.getFecha() + 1);
	}

	public void cancelar(){   
		this.setCancela(this.getCancela() + 1);
	}

	public void status(){   
		System.out.println(" O estudante " + this.getNome() 
		+" acompanhou mais um protocolo, agora possui: " + this.getAbre() + " aberto(s), " + this.getFecha() + " fechado(s), e " + this.getCancela() + " cancelado(s) "  );
	}

	public Estudante(
		int matricula,
		String nome,
		String curso,
		int abre,
		int fecha,
		int cancela,
		String status
	) {
		super();
		matricula = matricula;
		nome = nome;
		curso = curso;
		this.abre = abre;
		this.fecha = fecha;
		this.cancela = cancela;
		this.status = status;
	}
}
