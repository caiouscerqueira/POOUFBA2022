export class Protocolo {

	//Atributos
	private idProtocolo: number;
	private nomeProtocolo: string;
	private dataCadastro: string;
	private dataAtualizacao: string;
	private stProtocolo: string;
	private funcionarioNome?: string;

	// Construtor
    constructor(
        idProtocolo: number,
        nomeProtocolo: string,
        dataCadastro: any,
        dataAtualizacao: any,
        stProtocolo: string,
		funcionarioNome?: string,
    ) {
        this.idProtocolo = idProtocolo;
        this.nomeProtocolo = nomeProtocolo;
        this.dataCadastro = dataCadastro;
        this.dataAtualizacao = dataAtualizacao;
        this.stProtocolo = stProtocolo;
		this.funcionarioNome = funcionarioNome ?? undefined;
    }

    // Metodos
	public getIdProtocolo(): number {
		return this.idProtocolo;
	}

	public setIdProtocolo(idProtocolo: number): void {
		this.idProtocolo = idProtocolo;
	}

	public getNomeProtocolo(): string {
		return this.nomeProtocolo;
	}

	public setNomeProtocolo(nomeProtocolo: string): void {
		this.nomeProtocolo = nomeProtocolo;
	}

	public getDataCadastro(): string {
		return this.dataCadastro;
	}

	public setDataCadastro(dataCadastro: string): void {
		this.dataCadastro = dataCadastro;
	}

	public getDataAtualizacao(): string {
		return this.dataAtualizacao;
	}

	public setDataAtualizacao(dataAtualizacao: string): void {
		this.dataAtualizacao = dataAtualizacao;
	}

	public getStProtocolo(): string {
		return this.stProtocolo;
	}

	public setStProtocolo(stProtocolo: string): void {
		this.stProtocolo = stProtocolo;
	}

	public getFuncionarioNome(): string | null {
		return this.funcionarioNome ?? null;
	}

	public setFuncionarioNome(funcionarioNome: string): void {
		this.funcionarioNome = funcionarioNome;
	}
}
