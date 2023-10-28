const Kitten = require("../models/kitten");

const addKitten = (async (req, res) => {
    const current_kitten = {
        name: req.body.name
    }
    const result = await Kitten.create(current_kitten)
    res.send(result)
})

const getKittens = (async (req, res) => {
    const {name} = req.query
    result = await Kitten.find(name ? {name} : {})
    res.send(result)
})

module.exports = {
    addKitten,
    getKittens
}