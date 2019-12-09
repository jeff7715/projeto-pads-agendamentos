const Medico = require('../models/Medico');

class  MedicoController {

   async  index(req, res) {
        const { idEspecialidade } = req.query;

        const medicos = await Medico.getAll(idEspecialidade);

        return res.status(200).json(medicos);
    }

}

module.exports = new MedicoController();

