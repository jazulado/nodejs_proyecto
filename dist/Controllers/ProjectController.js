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
    }
};

module.exports = controller;