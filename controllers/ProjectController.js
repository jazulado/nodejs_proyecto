const Patient = require('../models/ModelPatient.js');
let controller = {
    
    home: async (req, res) => {

        const users = await Patient.find();
        const variable = { "params": users };
        const strvar = JSON.stringify(variable);
        const strpar = JSON.parse(strvar);
        res.render('home', strpar);
    },
    create: async (req, res) => {
        
        res.render('create');
    },
    createpatient: async (req, res) => {
        const { patientName, patientLastname, patientDocId, patientBornDate, patientCity, patientDistrict, patientPhone } = req.body;
        console.log(patientName, patientLastname, patientDocId, patientBornDate, patientCity, patientDistrict, patientPhone);


        const newPatient = new Patient({ patientName, patientLastname, patientDocId, patientBornDate, patientCity, patientDistrict, patientPhone });
        await newPatient.save();
        res.redirect("/medapp/");

    },
    delete: async (req, res) => {
        const { patientId } = req.body;

        await Patient.findByIdAndDelete(patientId);

        console.log(patientId);
        res.redirect("/medapp/");
    },
    edit: async (req, res) => {
        const { patientId } = req.body;
        await Patient.findById(patientId, function (err, user) {
            const strvar = JSON.stringify(user);
            const strpar = JSON.parse(strvar);
            res.render('edit', strpar);

        });

    },
    editpatient: async (req, res) => {
        const { patientId, patientName, patientLastname, patientDocId, patientBornDate, patientCity, patientDistrict, patientPhone } = req.body;
        await Patient.findByIdAndUpdate(patientId, { patientName, patientLastname, patientDocId, patientBornDate, patientCity, patientDistrict, patientPhone });

        res.redirect("/medapp/");


    },
}

module.exports = controller;



