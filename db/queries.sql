CREATE TABLE Servidores (
      CPF VARCHAR(11) PRIMARY KEY,
      SNome VARCHAR(255) NOT NULL,
      Tipo CHAR(1) NOT NULL
);

INSERT INTO Servidores (
  CPF,
  SNome,
  Tipo
) VALUES (
    '12345678912',
    'Jo達o',
    'F'
),(
    '96385274195',
    'Franco',
    'P'
),(
    '78945612378',
    'Alicia',
    'F'
),(
    '32165498752',
    'Jenifer',
    'P'
);  

CREATE TABLE Funcionarios(
   SCPF VARCHAR(11),
   FNome VARCHAR(255) NOT NULL PRIMARY KEY,
   Funcao  VARCHAR(255) NOT NULL,
   CONSTRAINT fk_SCPF
      FOREIGN KEY(SCPF)
      REFERENCES Servidores(CPF)
);

INSERT INTO Funcionarios (SCPF, FNome, Funcao) VALUES 
('12345678912','Jo達o','Atendente'),
('78945612378','Alicia','Supervisor');

CREATE TABLE Professores(
   SCPF VARCHAR(11),
   PNome VARCHAR(255) NOT NULL PRIMARY KEY,
   Titulo  VARCHAR(255) NOT NULL,
   CONSTRAINT fk_SCPF
      FOREIGN KEY(SCPF)
      REFERENCES Servidores(CPF)
);

INSERT INTO Funcionarios (SCPF, FNome, Funcao) VALUES 
('96385274195','Franco','Professor'),
('32165498752','Jenifer','Professor');

CREATE TABLE Cursos (
   Id BIGINT PRIMARY KEY, 
   CNome VARCHAR(255) NOT NULL
);

INSERT INTO Cursos (Id, CNome) VALUES
(1,'Engenharia'),
(2,'Matematica'),
(6,'Musica'),
(4,'Danca'),
(5,'Direito'),
(3,'Medicina'),
(9,'Letras'),
(8,'Fisica'),
(7,'Pedagogia');

INSERT INTO Professores (SCPF, PNome, Titulo) VALUES 
('96385274195','Franco','Doutor'),
('32165498752','Jenifer','Mestre');

CREATE TABLE Disciplinas (
    Id BIGINT PRIMARY KEY, 
    DNome VARCHAR(255) NOT NULL,
    Horas INT NOT NULL,
    PNome VARCHAR(255),
    CONSTRAINT fk_PNome
      FOREIGN KEY(PNome)
      REFERENCES Professores(PNome)
);

INSERT INTO Disciplinas (Id, DNome, Horas, PNome) VALUES
(1,'Calculo',102,'Franco'),
(2,'Introducao_academica',36,'Jenifer'),
(3,'Matematica_discreta',72,'Franco'),
(4,'Etica',72,'Jenifer'),
(5,'Algebra',72,'Franco');

CREATE TABLE Estudantes (
    Matricula BIGINT PRIMARY KEY, 
    ENome VARCHAR(255) NOT NULL,
    IdCurso  BIGINT,
    CONSTRAINT fk_IdCurso
      FOREIGN KEY(IdCurso)
      REFERENCES Cursos(Id)
);

INSERT INTO Estudantes (Matricula, ENome, IdCurso) VALUES
(1,'Michael',3),
(4,'Eliza',2),
(5,'Bela',1),
(3,'Carlos',4);

CREATE TABLE  RelCursoDIsciplina (
    Idcursos BIGINT,
    IdDIsciplinas  BIGINT,
    CONSTRAINT fk_Idcursos
      FOREIGN KEY(Idcursos)
      REFERENCES Cursos(Id),
    CONSTRAINT fk_IdDIsciplinas
      FOREIGN KEY(IdDIsciplinas)
      REFERENCES Disciplinas(Id)
);

INSERT INTO RelCursoDIsciplina (Idcursos, IdDIsciplinas) VALUES
(1, 1),
(1,3),
(1,5),
(2,1),
(2,3),
(2,5),
(5,4),
(5,2),
(8,1);

CREATE TABLE Protocolos (
     Id BIGINT PRIMARY KEY, 
     DNome VARCHAR(255) NOT NULL,
     DataCadastro DATE NOT NULL,
     DataAtualizacao DATE NOT NULL,
     Status VARCHAR(255) NOT NULL,
     FNome VARCHAR(255),
     CONSTRAINT fk_FNome
        FOREIGN KEY(FNome)
        REFERENCES Funcionarios(FNome)
);

INSERT INTO Protocolos (Id, DNome, DataCadastro, DataAtualizacao, Status, FNome) VALUES
(1,'aproveitamento_de_estudos','2022-04-05', '2022-05-05','ativo', 'Jo達o'),
(2,'trancamento_parcial_de_disciplinas', '2021-11-25','2022-01-25','cancelado', 'Jo達o'),
(3,'adicionar_atividades_complementares','2021-05-03','2021-09-03','ativo', 'Alicia'),
(4,'mudanca_de_curso','2022-02-06', '2022-05-06','finalizado', 'Alicia'),
(5,'trancamento_total_de_disciplinas','2022-01-04', '2022-05-04','finalizado', 'Alicia');

-- CREATE TABLE  RelEstudanteProtocolo  (
--    IdProtocolo BIGINT, 
--    EMatricula  BIGINT,
--    PDataCadastro DATE NOT NULL,
--    CONSTRAINT fk_IdProtocolo
--       FOREIGN KEY(IdProtocolo)
--       REFERENCES Protocolos(Id),
--    CONSTRAINT fk_EMatricula
--       FOREIGN KEY(EMatricula)
--       REFERENCES Estudantes(Matricula),
--    CONSTRAINT fk_PDataCadastro
--       FOREIGN KEY(PDataCadastro)
--       REFERENCES Protocolos(DataCadastro)
-- );

-- INSERT INTO RelEstudanteProtocolo (IdProtocolo, EMatricula, PDataCadastro) VALUES
-- (1,3,'2022-04-05'),
-- (2,3, '2021-11-25'),
-- (3,4,'2021-05-03'),
-- (4,4,'2022-02-06'),
-- (5,5,'2022-01-04');