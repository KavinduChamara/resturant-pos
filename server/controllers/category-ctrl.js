const Category = require('../models/category-model')

getCategories = async (req, res) => {
    await Category.find({}, (err, categories) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!categories.length) {
            return res
                .status(404)
                .json({ success: false, error: `Category not found` })
        }
        return res.status(200).json({ success: true, data: categories })
    }).catch(err => console.log(err))
}

module.exports = {
    getCategories
}