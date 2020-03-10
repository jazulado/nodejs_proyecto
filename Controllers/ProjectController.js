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
    },
    producto: (req, res) => {
        if(!req.body.nombreProducto || !req.body.valor || !req.body.unidadesDisponibles)
        {
            if(!req.body.nombreProducto){
                return res.send({
                    error: "nombreProducto es vacio"
                })
            }
            else if(!req.body.valor){
                return res.send({
                    error: "valor es vacio"
                })
            }
            else{
                return res.send({
                    error: "unidadesDisponibles es vacio"
                })
            }
        }
        else{
            
            if (isNaN(req.body.valor) || isNaN(req.body.unidadesDisponibles)) {
                return res.send({
                    message: "valor o unidadesDisponibles no es un numeros"
                })
            }
            else{
                req.body.estado = "success";
                return res.json(req.body)

            }
        }
        
    },
    usuario: (req, res) => {
        if(!req.body.nombreUsuario || !req.body.password || !req.body.cedula)
        {
            return res.send({
                error: "Debe llenar todos los campos"
            })
        }
        else if(req.body.password.length > 8){
            return res.send({
                error: "La cedula excede el limite"
            })
        }
        else{
            return res.send({
                login: "sucess"
            })
        }
        
    },
}

module.exports = controller