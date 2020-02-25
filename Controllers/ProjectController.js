let controller = {
    home: (req, res) => {
        return res.send({
            message: "Welcome to home"
        })
    },
    cesde: (req, res) => {
        return res.send({
            message: "Welcome to cesde"
        })
    }
}

module.exports = controller