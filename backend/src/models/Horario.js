const query = require('../database/db');

class Horario {

    getAll(idMedico) {
        let sql = `
        SELECT tbhora.dataHora FROM tbespecialidade esp
        INNER JOIN tbmedico med ON esp.idEspecialidade = med.idEspecialidade
        INNER JOIN tbhoradisponivel tbhora ON med.idMedico = tbhora.idMedico
        WHERE med.idMedico = ${idMedico} AND tbhora.disponivel = 1;
        `;

        const horarios = query(sql);

        return horarios;
    }

}

module.exports = new Horario();