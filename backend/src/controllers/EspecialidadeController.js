const Especialidade = require('../models/Especialidade');


class EspecialidadeController {

   async index(req, res) {

        let especialidades = await Especialidade.getAll();
        console.log(especialidades);

        return res.status(200).json(especialidades);
    }

}

module.exports = new EspecialidadeController();