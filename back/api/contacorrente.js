module.exports = app => {
    // const { existsOrError, notExistsOrError } = app.api.validation

    const save = (req, res) => {
        const contacorrente = { ...req.body }
        if(req.params.id) contacorrente.id = req.params.id

        try {
            // existsOrError(contacorrente.agencia, 'Descrição não informada')
            // existsOrError(contacorrente.digAgencia, 'Categoria não informada')
            // existsOrError(contacorrente.numContCorr, 'Autor não informado')
            // existsOrError(contacorrente.digContCorr, 'Conteúdo não informado')
        } catch(msg) {
            res.status(400).send(msg)
        }

        if(contacorrente.id) {
            app.db('contacorrente')
                .update(contacorrente)
                .where({ id: contacorrente.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('contacorrente')
                .insert(contacorrente)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('contacorrente')
            .then(contacorrente => res.json(contacorrente))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('contacorrente')
            .where({ id: req.params.id })
            .first()
            .then(contacorrente => res.json(contacorrente))
            .catch(err => res.status(500).send(err))
    }

    const remove = async(req,res) => {
        try {
            const rowsDeleted = await app.db('contacorrente')
            .where({ id: req.params.id }).del()
            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }



   
    return { save,get, getById, remove }
}