const express = require('express');
const router = express.Router();

const Aluno = require('../app/models/Aluno');

//router.use();
getAll = async (req, res) => {
    try {
        const alunos = await Aluno.findAll();
        return res.json(alunos);
    }
    catch (x) {
        return res.json(x);
    }
}

getById = async (req, res) => {
    const { id } = req.params;
    const aluno = await Aluno.findByPk(id);
    return res.json(aluno);
}

cadastrar = async (req, res, next) => {
    try {
        const { nome, sexo, dtnasc } = req.body;
        if ((sexo != 'm') && (sexo != 'f')) {
            return res.json({
                error: true,
                msg: "sexo invalido!"
            });
        }
        else {
            Aluno.create({
                tx_nome: nome,
                tx_sexo: sexo,
                dt_nascimento: dtnasc
            }).then(u => res.status(201).json({
                error: false,
                data: u,
                message: 'Solicitação realizada com sucesso! '
            })).catch(error => res.json({
                error: true,
                data: [],
                msg: error
            }));
        }
    } catch (x) {
        console.log(x);
        return res.json(x);
    }
}

//atualizar
atualizar = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { nome, sexo, dtnasc } = req.body;

        Aluno.update({
            tx_nome: nome,
            tx_sexo: sexo,
            dt_nascimento: dtnasc
        }, {
            where: {
                id
            }
        }).then(u => res.status(201).json({
            error: false,
            message: 'Solicitação realizada com sucesso! '
        })).catch(error => res.json({
            error: true,
            message: error
        }));
    } catch (x) {
        return res.json(x);
    }
}
//excluir
deletar = async (req, res, next) => {
    try {
        const id = req.params.id;
       
        Aluno.destroy(
            {
            where: {
                id
            }
        }).then(u => res.status(201).json({
            error: false,
            message: 'Solicitação realizada com sucesso! '
        })).catch(error => res.json({
            error: true,
            message: error
        }));
    } catch (x) {
        return res.json(x);
    }
}


router.get('/', getAll);

router.get('/:id', getById);

router.post('/', cadastrar);

router.post('/:id', atualizar);

router.delete('/:id', deletar);

module.exports = app => app.use('/aluno', router);
