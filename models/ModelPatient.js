const { Schema, model } = require('mongoose');

const PatientSchema = new Schema({
    patientName: { type: String },
    patientLastname: { type: String },
    patientDocId: { type: String },
    patientBornDate: { type: Number },
    patientCity: { type: String },
    patientDistrict: { type: String },
    patientPhone: { type: Number }
});

module.exports = model("Patient", PatientSchema);