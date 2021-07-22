const Item = require('../models/item-model')

getItems = async (req, res) => {
    await Item.find({}, (err, items) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!items.length) {
            return res
                .status(404)
                .json({ success: false, error: `Item not found` })
        }
        return res.status(200).json({ success: true, data: items })
    }).populate({path: 'category'}).catch(err => console.log(err))
}

module.exports = {
    getItems
}