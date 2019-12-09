const query = require('../database/db');


class Medico {

    getAll(idEspecialidade) {
        let sql = `
            SELECT  med.idMedico, pe.nome FROM tbespecialidade esp
            INNER JOIN tbmedico med ON esp.idEspecialidade = med.idEspecialidade
            INNER JOIN tbpessoa pe ON med.idMedico = pe.codPessoa
            WHERE esp.idEspecialidade = ${idEspecialidade}
        `;

        let medicos = query(sql);

        return medicos;
    }

}

module.exports = new Medico();