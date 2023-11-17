const Router = require('express').Router()

const { saveDesignation, updateDesignation, deleteDesignation, getallDesignation } = require('../controllers/DesignationController')
const { validate } = require('../helpers/CommonMessage')
const { designationvalidation, updatedesignationvalidation, deletedesignationvalidation } = require('../validation/DesignationValidation')


Router.route('/add-designation').post([designationvalidation, validate], saveDesignation)
Router.route('/update-designation').put([updatedesignationvalidation, validate], updateDesignation)
Router.route('/get-designation').get(getallDesignation)
Router.route('/delete-designation').delete([deletedesignationvalidation, validate], deleteDesignation)

module.exports = Router