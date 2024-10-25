const express = require('express');
const router = express.Router();

const Disciplina = require('../app/models/Disciplina');

//router.use();
getAll = async (req, res) => {
    try {
        const disciplina = await Disciplina.findAll();
        return res.json(disciplina);
    }
    catch (x) {
        return res.json(x);
    }
}

getById = async (req, res) => {
    const { id } = req.params;
    const disciplina = await Disciplina.findByPk(id);
    return res.json(disciplina);
}

cadastrar = async (req, res, next) => {
    try {
        const { descricao } = req.body;        
        Disciplina.create({
                tx_descricao: descricao
            }).then(u => res.status(201).json({
                error: false,
                data: u,
                message: 'Solicitação realizada com sucesso! '
            })).catch(error => res.json({
                error: true,
                data: [],
                msg: error
            }));
        } catch (x) {
        console.log(x);
        return res.json(x);
    }
}

//atualizar
atualizar = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { descricao } = req.body;

        Disciplina.update({
            tx_descricao: descricao
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
       
        Disciplina.destroy(
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

module.exports = app => app.use('/disciplina', router);
