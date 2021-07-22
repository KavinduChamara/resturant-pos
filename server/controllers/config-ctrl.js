const Config = require('../models/config-model')

getConfigs = async (req, res) => {
    await Config.find({}, (err, configs) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!configs.length) {
            return res
                .status(404)
                .json({ success: false, error: `config not found` })
        }
        return res.status(200).json({ success: true, data: configs })
    }).catch(err => console.log(err))
}

module.exports = {
    getConfigs
}