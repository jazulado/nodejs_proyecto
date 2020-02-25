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
    }
}

module.exports = controller