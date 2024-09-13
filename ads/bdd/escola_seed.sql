INSERT INTO
    cidades (nome, UF)
VALUES
    ('São Paulo', 'SP'),
    ('Rio de Janeiro', 'RJ'),
    ('Belo Horizonte', 'MG'),
    ('Porto Alegre', 'RS'),
    ('Curitiba', 'PR');

INSERT INTO
    Area (descricao)
VALUES
    ('Matemática'),
    ('Ciências'),
    ('História'),
    ('Geografia'),
    ('Educação Física');

INSERT INTO
    alunos (
        id_cidade,
        nome,
        CPF,
        data_nasc,
        email,
        endereco,
        numero,
        complemento,
        telefone
    )
VALUES
    (
        1,
        'João da Silva',
        '123.456.789-00',
        '2000-01-15',
        'joao.silva@example.com',
        'Rua A',
        '123',
        'Apto 1',
        '(11) 98765-4321'
    ),
    (
        1,
        'Maria Oliveira',
        '987.654.321-00',
        '1999-02-20',
        'maria.oliveira@example.com',
        'Rua B',
        '456',
        'Apto 2',
        '(21) 91234-5678'
    ),
    (
        2,
        'Carlos Santos',
        '555.444.333-22',
        '2001-03-30',
        'carlos.santos@example.com',
        'Rua C',
        '789',
        'Casa',
        '(31) 99876-5432'
    ),
    (
        2,
        'Ana Costa',
        '444.555.666-77',
        '2000-04-25',
        'ana.costa@example.com',
        'Rua D',
        '321',
        'Apto 3',
        '(41) 93456-7890'
    ),
    (
        3,
        'Luiz Ferreira',
        '111.222.333-44',
        '2002-05-12',
        'luiz.ferreira@example.com',
        'Rua E',
        '654',
        'Casa',
        '(51) 98765-1234'
    );

INSERT INTO
    professores (
        siape,
        id_cidade,
        id_area,
        nome,
        CPF,
        data_nasc,
        email,
        endereco,
        numero,
        complemento,
        telefone
    )
VALUES
    (
        123456,
        1,
        1,
        'Pedro Almeida',
        '111.222.333-44',
        '1985-04-10',
        'pedro.almeida@example.com',
        'Rua F',
        '001',
        'Sala 01',
        '(11) 96543-6789'
    ),
    (
        654321,
        2,
        2,
        'Ana Costa',
        '444.555.666-77',
        '1990-05-15',
        'ana.costa@example.com',
        'Rua G',
        '002',
        'Sala 02',
        '(21) 93456-7890'
    ),
    (
        789012,
        3,
        3,
        'Carlos Silva',
        '222.333.444-00',
        '1982-06-20',
        'carlos.silva@example.com',
        'Rua H',
        '003',
        'Sala 03',
        '(31) 91234-5678'
    ),
    (
        345678,
        4,
        4,
        'Fernanda Torres',
        '333.444.555-88',
        '1988-07-25',
        'fernanda.torres@example.com',
        'Rua I',
        '004',
        'Sala 04',
        '(51) 99876-5432'
    ),
    (
        901234,
        5,
        5,
        'Roberto Lima',
        '444.555.666-99',
        '1981-08-30',
        'roberto.lima@example.com',
        'Rua J',
        '005',
        'Sala 05',
        '(41) 98765-1234'
    );

INSERT INTO
    turmas (turma, ano)
VALUES
    ('1º Ano A', '2023'),
    ('2º Ano B', '2023'),
    ('3º Ano C', '2023'),
    ('4º Ano D', '2023'),
    ('5º Ano E', '2023');

INSERT INTO
    disciplinas (descricao)
VALUES
    ('Matemática'),
    ('Português'),
    ('História'),
    ('Geografia'),
    ('Educação Física');

INSERT INTO
    alunos_turmas (id_turma, matricula)
VALUES
    (1, 1),
    (1, 2),
    (2, 3),
    (2, 4),
    (3, 5);

INSERT INTO
    alunos_disciplinas (id_turma, id_disciplina)
VALUES
    (1, 1),
    (1, 2),
    (2, 3),
    (2, 4),
    (3, 5);