const Patient = require('../models/ModelPatient.js');
let controller = {
    adduser: async (req, res) => {
        const { name, email, password, edad } = req.body;
        const newUser = new User({ name, email, password, edad });
        await newUser.save();
        return res.send({
            message: "User added successfully"
        });
    },

    listusers: async (req, res) => {
        const name = req.query.name;
        //console.log(name);
        const users = await User.find({ name: name });
        return res.json({ users });
    },
    updateuser: async (req, res) => {
        const { name, email, password, edad, _id } = req.body;
        await User.findByIdAndUpdate(_id, { name, email, password, edad });
        return res.json({
            message: "user updated successfully"
        });
    },
    deleteuser: async (req, res) => {
        const { _id } = req.body;
        await User.findByIdAndDelete(_id);
        return res.json({
            message: "person deleted"
        });
    },
    home: async (req, res) => {

        
        const name = req.query.name;
        const users = await Patient.find();

        
        let people = ["juan", "camilo", "julian", "John"];
        let datos = { name: "Juan", lastname: "zabala s", people: people };
        const variable = {"params": users};
        const strvar = JSON.stringify(variable);
        const strpar = JSON.parse(strvar);
        //variable[0] = variable._id.toString();
        console.log(typeof(strpar.params[0]._id))
        res.render('home', strpar);
    },
    create: async (req, res) => {
        let people = ["juan", "camilo", "julian", "John"];
        let datos = { name: "Juan", lastname: "zabala s", people: people };
        res.render('create', datos);
    },
    createuser: async (req, res) => {
        const { patientName, patientLastname, patientDocId, patientBornDate, patientCity, patientDistrict, patientPhone } = req.body;
        console.log(patientName, patientLastname, patientDocId, patientBornDate, patientCity, patientDistrict, patientPhone);

        const newUser = new Patient({ patientName, patientLastname, patientDocId, patientBornDate, patientCity, patientDistrict, patientPhone });
        await newUser.save();
        res.render('home', datos);
    },
}

module.exports = controller;




/*
app.get('/', (req, res) =>{
    let people = ["juan","camilo","julian","John"];
    let datos = {name: "Juan", lastname: "zabala s", people:people};
    res.render('home',datos);
});

app.get('/create', (req, res) =>{
    let people = ["juan","camilo","julian","John"];
    let datos = {name: "Juan", lastname: "zabala s", people:people};
    res.render('create',datos);

});
app.post('/createuser', (req, res) =>{
    const {email, password} = req.body;
    console.log(email + " : " + password);
    res.send("todo fue correcto");
});
*/