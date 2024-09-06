CREATE DATABASE `banco_empresa`;

USE `banco_empresa`;

CREATE TABLE
    `funcionario` (
        `codigo` INTEGER NOT NULL AUTO_INCREMENT,
        `nome` VARCHAR(200) NOT NULL,
        PRIMARY KEY (`codigo`)
    );

CREATE TABLE
    `projeto` (
        `codigo` INTEGER NOT NULL AUTO_INCREMENT,
        `nome` VARCHAR(300) NOT NULL,
        PRIMARY KEY (`codigo`)
    );

CREATE TABLE
    `alocacao` (
        `codigo_funcionario` INTEGER NOT NULL AUTO_INCREMENT,
        `codigo_projeto` INTEGER NOT NULL,
        PRIMARY KEY (`codigo_funcionario`, `codigo_projeto`)
    );

ALTER TABLE `alocacao` ADD FOREIGN KEY (`codigo_funcionario`) REFERENCES `funcionario` (`codigo`);

ALTER TABLE `alocacao` ADD FOREIGN KEY (`codigo_projeto`) REFERENCES `projeto` (`codigo`);