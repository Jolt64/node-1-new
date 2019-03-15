
const products = require('../../products.json')

module.exports = {

    getAllProducts: (req, res) => {
        if(req.query.price) {
            const { price } = req.query
            let holder = products.filter(item => item.price <= price*1)
            res.status(200).send(holder) 
            console.log(req.query.price)
        } else {
            res.status(200).send(req.params)
        }
    },


    getItem: (req, res) => {
        const { id } = req.params
        let holder = products.filter(item => item.id === id*1)
        if(holder.length === 1 ) {
            res.status(200).send(holder)
        } else { res.status(500).send('Item not in list')}
    },

    itemByPrice: (req, res) => {

    }
}