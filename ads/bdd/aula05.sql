-- Criar um comando SQL para atualizar o CPF do aluno com a matrícula 1000002 para 089.777.354-22
UPDATE `alunos`
SET
    `CPF` = "089.777.354-22"
WHERE
    `matricula` = 1000002;

-- Criar um comando SQL para atualizar a área dos professores da área de informática de "Informática/Programação" e "Informática/Redes" para "Informática Geral"
UPDATE `professores`
JOIN `area` ON `professores`.`id_area` = `area`.`id_area`
SET
    `professores`.`id_area` = (
        SELECT
            `id_area`
        FROM
            `area`
        WHERE
            `descricao` = "Informática Geral"
    )
WHERE
    `area`.`descricao` IN ("Informática/Programação", "Informática/Redes");

-- Criar um comando SQL para atualizar os dados do professor com SIAPE 7700005 para Rogério da Nóbrega, 22/04/1987, Física, rogerio.nobrega@gmail.com
UPDATE `professores`
SET
    `nome` = "Rogério de Nóbrega",
    `data_nasc` = STR_TO_DATE ("22/04/1987", "%d/%m/%Y"),
    `id_area` = (
        SELECT
            `id_area`
        FROM
            `area`
        WHERE
            `descricao` = "Física"
    ),
    `email` = "rogerio.nobrega@gmail.com"
WHERE
    `SIAPE` = 7700005;

-- Criar um comando SQL para apagar todos os alunos com matrícula de 1000003 a 1000005
DELETE FROM `alunos`
WHERE
    `matricula` >= 1000003
    AND `matricula` <= 1000005;

-- Criar um comando SQL para apagar os professores da área de informática Geral que nasceram antes de 01/01/2000
DELETE FROM `professores`
WHERE
    `id_area` = (
        SELECT
            `id_area`
        FROM
            `area`
        WHERE
            `descricao` = "Informática Geral"
    )
    AND `data_nasc` < STR_TO_DATE ("01/01/2000", "%d/%m/%Y");

-- Criar um comando SQL para apagar todas a turmas da Info de 2020
DELETE FROM `turmas`
WHERE
    `turma` = "Info"
    AND `ano` = 2020;