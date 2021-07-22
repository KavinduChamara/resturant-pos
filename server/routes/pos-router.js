const express = require('express')

const ItemCtrl = require('../controllers/item-ctrl')
const OrderCtrl = require('../controllers/order-ctrl')
const CategoryCtrl = require('../controllers/category-ctrl')
const ConfigCtrl = require('../controllers/config-ctrl')

const router = express.Router()

router.post('/order', OrderCtrl.createOrder)
router.get('/items', ItemCtrl.getItems)
router.get('/categories', CategoryCtrl.getCategories)
router.get('/configs', ConfigCtrl.getConfigs)

module.exports = router