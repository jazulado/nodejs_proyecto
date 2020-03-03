"use strict";

var controller = {
    home: function home(req, res) {
        return res.send({
            message: "Welcome to homeeee"
        });
    },
    cesde: function cesde(req, res) {
        return res.send({
            message: "Welcome to cesde"
        });
    },
    alumnos: function alumnos(req, res) {
        return res.json(req.body.lastname);
    },
    formulario: function formulario(req, res) {
        if (req.body.nombre.length < 10 && !isNaN(req.body.cedula) && !isNaN(req.body.edad)) {
            return res.json(req.body);
        } else {
            if (isNaN(req.body.cedula) || isNaN(req.body.edad)) {
                return res.send({
                    message: "error no son numeros"
                });
            } else {
                return res.send({
                    message: "error mayor que 10"
                });
            }
        }
    }
};

module.exports = controller;