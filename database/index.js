const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Aluno = require('../app/models/Aluno');
const Cursa = require('../app/models/Cursa');
const Curso = require('../app/models/Curso');
const Disciplina = require('../app/models/Disciplina');
const Instituicao = require('../app/models/Instituicao');
const Leciona = require('../app/models/Leciona');
const Professor = require('../app/models/Professor');
const Tipo_Curso = require('../app/models/Tipo_Curso');
const Tipo_Disciplina = require('../app/models/Tipo_Disciplina');
const Titulo = require('../app/models/Titulo');


const connection = new Sequelize(dbConfig);

Aluno.init( connection );
Cursa.init( connection );
Curso.init( connection );
Disciplina.init( connection );
Instituicao.init( connection );
Leciona.init( connection );
Professor.init( connection );
Tipo_Curso.init( connection );
Tipo_Disciplina.init( connection );
Titulo.init( connection );


Aluno.associate( connection.models );
Cursa.associate( connection.models );
Curso.associate( connection.models );
Disciplina.associate( connection.models );
Instituicao.associate( connection.models );
Leciona.associate( connection.models );
Professor.associate( connection.models );
Tipo_Curso.associate( connection.models );
Tipo_Disciplina.associate( connection.models );
Titulo.associate( connection.models );


module.exports = connection;