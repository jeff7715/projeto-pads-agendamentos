const routes = require('express').Router()

const EspecialidadeController = require('./src/controllers/EspecialidadeController');
const MedicoController = require('./src/controllers/MedicoController');
const HorarioController = require('./src/controllers/HorarioController');

routes.get("/especialidades", EspecialidadeController.index);

routes.get('/medicos', MedicoController.index);

routes.get('/medico-horarios', HorarioController.index);


module.exports = routes