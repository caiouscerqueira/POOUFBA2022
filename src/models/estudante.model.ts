export class Estudante {

	//Atributos
	private  matricula: number;
	private nome: string;
	private curso: string;
	private abre: number;
	private fecha: number;
	private cancela: number;
	private status: string;

    // Construtor
    constructor(
		matricula: number,
		nome: string,
		curso: string,
		abre: number,
		fecha: number,
		cancela: number,
		status: string
	) {
		this.matricula = matricula;
		this.nome = nome;
		this.curso = curso;
		this.abre = abre;
		this.fecha = fecha;
		this.cancela = cancela;
		this.status = status;
	}

    // Métodos
	public getMatricula(): number {
		return this.matricula;
	}

	public setMatricula(matricula: number): void {
		this.matricula = matricula;
	}

	public getNome(): string {
		return this.nome;
	}

	public setNome(nome: string): void {
		this.nome = nome;
	}

	public getCurso(): string {
		return this.curso;
	}

	public setCurso(curso: string): void {
		this.curso = curso;
	}

	public getAbre(): number {
		return this.abre;
	}

	public setAbre(abre: number): void {
		this.abre = abre;
	}

	public getFecha(): number {
		return this.fecha;
	}

	public setFecha(fecha: number): void {
		this.fecha = fecha;
	}

	public getCancela(): number {
		return this.cancela;
	}

	public setCancela(cancela: number): void {
		this.cancela = cancela;
	}

	public getStatus(): string {
		return this.status;
	}

	public setStatus(status: string): void {
		this.status = status;
	}

	// Métodos públicos
	public abrir(): void {
		this.setAbre(this.getAbre() + 1);
	}

	public fechar(): void {
		this.setFecha(this.getFecha() + 1);
	}

	public cancelar(): void {   
		this.setCancela(this.getCancela() + 1);
	}

	public statusEstd(): void {   
		console.log(`O estudante ${this.getNome()} acompanhou mais um protocolo, agora possui: ${this.getAbre()} aberto(s), ${this.getFecha()} fechado(s), e ${this.getCancela()} cancelado(s)`  );
	}
}
