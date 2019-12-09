const query = require('../database/db');

class Especialidade {

    getAll() {
        let sql = "SELECT * FROM tbespecialidade"

        const especialidades = query(sql);

        return especialidades;
    }
}

module.exports = new Especialidade();