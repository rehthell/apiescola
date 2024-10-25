/*
    Aluna: Rebeca M.C.T. Figueiredo
    Matricula: 2019012144
    Disciplina:Programação 3
    Prof.: Alex Paulo
    Turma: 2021.2
*/

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./database');

const app = express();
app.use(cors());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

require('./controllers/AlunoController')(app);
require('./controllers/TituloController')(app);
require('./controllers/DisciplinaController')(app);
app.listen(3004);

//sempre quer criar um controller cria aqui