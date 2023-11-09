const Router = require('express').Router()

const { saveStore, updatestore, deletestore, getallstore } = require('../controllers/StoreController')
const { validationError } = require('../helpers/CommonMessage')
const { storevalidation, updatestorevalidation, deletestorevalidation } = require('../validation/StoreValidation')


Router.route('/add-store').post([storevalidation, validationError], saveStore)
Router.route('/update-store').put([updatestorevalidation, validate], updatestore)
Router.route('/get-store').get(getallstore)
Router.route('/delete-store').delete([deletestorevalidation, validate], deletestore)

module.exports = Router