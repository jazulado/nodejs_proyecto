"use strict";

var controller = {
    home: function home(req, res) {
        return res.send({
            message: "Welcome to home"
        });
    }
};

module.exports = controller;