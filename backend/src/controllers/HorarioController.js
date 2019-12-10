const Horario = require('../models/Horario');

class HorarioController {

    async index(req, res) {
        const { idMedico } = req.query;

        const horarios = await Horario.getAll(idMedico); 

        res.status(200).json(horarios);
    }
}

module.exports = new HorarioController();