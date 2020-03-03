let controller = {
    home: (req, res) => {
        return res.send({
            message: "Welcome to homeeee"
        })
    },
    cesde: (req, res) => {
        return res.send({
            message: "Welcome to cesde"
        })
    },
    alumnos: (req, res) => {
        return res.json(req.body.lastname)
    },
    formulario: (req, res) => {
        if (req.body.nombre.length < 10 && !isNaN(req.body.cedula) && !isNaN(req.body.edad)) {  
            return res.json(req.body)
        }
        else{
            if (isNaN(req.body.cedula) || isNaN(req.body.edad)) {
                return res.send({
                    message: "error no son numeros"
                })
            }
            else{
                return res.send({
                    message: "error mayor que 10"
                })

            }
        }
    }
}

module.exports = controller