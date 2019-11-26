/* DELETANDO TUDO */
DROP DATABASE IF EXISTS agendaConsulta;

/* CRIANDO BANCO DE DADOS */
CREATE DATABASE IF NOT EXISTS agendaConsulta;
USE agendaConsulta;

/* CRIANDO TABELAS */
CREATE TABLE IF NOT EXISTS tbPessoa(
	codPessoa int auto_increment NOT NULL,
    nome varchar(100) not null,
    email varchar(50) not null,
    cpf varchar(15) unique not null,
    dataNasc date,
    PRIMARY KEY (codPessoa)
);

CREATE TABLE IF NOT EXISTS tbPaciente(
	idPaciente int not null,
    senha varchar(20) not null,
    PRIMARY KEY (idPaciente)
);

CREATE TABLE IF NOT EXISTS tbMedico(
	idMedico int not null,
    crm int not null,
    idEspecialidade int not null,
    PRIMARY KEY (idMedico)
);

CREATE TABLE IF NOT EXISTS tbEspecialidade(
	idEspecialidade int not null auto_increment,
    descricao varchar(50) not null,
    PRIMARY KEY (idEspecialidade)
);

CREATE TABLE IF NOT EXISTS tbAgendamento(
	idAgendamento int not null auto_increment,
    diaHoraAgendamento datetime not null,
    diaHoraConsulta datetime not null,
    idPaciente int not null,
    idMedico int not null,
    idEspecialidade int not null,
    PRIMARY KEY (idAgendamento)
);

CREATE TABLE IF NOT EXISTS tbTelefone(
	codTelefone int not null auto_increment,
    codPessoa int not null,
    telefone varchar(11) not null,
    PRIMARY KEY (codTelefone)
);

CREATE TABLE IF NOT EXISTS tbEndereco(
	codEndereco int not null auto_increment,
    cep int not null,
    cidade varchar(50) not null,
    uf varchar(2) not null,
    endereco varchar(100) not null,
    numero int not null,
    complemento varchar(50),
    codPessoa int not null,
    PRIMARY KEY (codEndereco)
);

/* CHAVES ESTRAGEIRAS */
ALTER TABLE tbPaciente
	ADD CONSTRAINT fk_PesPac FOREIGN KEY (idPaciente) REFERENCES tbPessoa (codPessoa);
    
ALTER TABLE tbMedico
	ADD CONSTRAINT fk_PesMed FOREIGN KEY (idMedico) REFERENCES tbPessoa (codPessoa);
    
ALTER TABLE tbMedico
	ADD CONSTRAINT fk_EspMed FOREIGN KEY (idEspecialidade) REFERENCES tbEspecialidade (idEspecialidade);

ALTER TABLE tbAgendamento
	ADD CONSTRAINT fk_PacAgd FOREIGN KEY (idPaciente) REFERENCES tbPaciente (idPaciente);
    
ALTER TABLE tbAgendamento
	ADD CONSTRAINT fk_MedAgd FOREIGN KEY (idMedico) REFERENCES tbMedico (idMedico);
    
ALTER TABLE tbAgendamento
	ADD CONSTRAINT fk_EspAgd FOREIGN KEY (idEspecialidade) REFERENCES tbEspecialidade (idEspecialidade);

ALTER TABLE tbTelefone
	ADD CONSTRAINT fk_PesTel FOREIGN KEY (codPessoa) REFERENCES tbPessoa (codPessoa);
    
ALTER TABLE tbEndereco
	ADD CONSTRAINT fk_PesEnd FOREIGN KEY (codPessoa) REFERENCES tbPessoa (codPessoa);
