package com.requerimentos.acompanhamento_de_requerimentos;

import java.util.Date;

public class Protocolo {

	//Atributos
	private int idProtocolo;
	private String nomeProtocolo;
	private Date dataCadastro;
	private Date dataAtualizacao; 
	private boolean stProtocolo;

	// Metodos
	public Protocolo(int idProtocolo, String nomeProtocolo, Date dataCadastro, Date dataAtualizacao, boolean stProtocolo) {
		super();
		idProtocolo = idProtocolo;
		nomeProtocolo = nomeProtocolo;
		dataCadastro = dataCadastro;
		dataAtualizacao = dataAtualizacao;
		stProtocolo = stProtocolo;
	
	}

	public int getIdProtocolo() {
		return idProtocolo;
	}

	public void setIdProtocolo(int idProtocolo) {
		this.idProtocolo = idProtocolo;
	}

	public String getNomeProtocolo() {
		return nomeProtocolo;
	}

	public void setNomeProtocolo(String nomeProtocolo) {
		this.nomeProtocolo = nomeProtocolo;
	}

	public Date getDataCadastro() {
		return dataCadastro;
	}

	public void setDataCadastro(Date dataCadastro) {
		this.dataCadastro = dataCadastro;
	}

	public Date getDataAtualizacao() {
		return dataAtualizacao;
	}

	public void setDataAtualizacao(Date dataAtualizacao) {
		this.dataAtualizacao = dataAtualizacao;
	}

	public boolean isStProtocolo() {
		return stProtocolo;
	}

	public void setStProtocolo(boolean stProtocolo) {
		this.stProtocolo = stProtocolo;
	}
}
