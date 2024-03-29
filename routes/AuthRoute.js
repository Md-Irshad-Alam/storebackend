const Router = require('express').Router();

const {
  register,
  login,
  forgetPassword,
  verifyOtp,
  resetPassword,
  logout,
  getlogedinuser,
  Getusers,
} = require('../controllers/AuthController');
const { Loggeduserhelper } = require('../helpers/AuthHelper');
const validate = require('../helpers/Validation');
const {
  registervalidation,
  loginvalidation,
  forgetPasswordvalidation,
  verifyOtpvalidation,
  resetPasswordvalidation,
} = require('../validation/AuthValidation');

Router.route('/register').post([registervalidation, validate], register);
Router.route('/login').post([loginvalidation, validate], login);
Router.route('/users').get([Loggeduserhelper], Getusers);
Router.route('/logout').post(logout);

Router.route('/forgetpassword').post(
  [forgetPasswordvalidation, validate],
  forgetPassword
);
Router.route('/verifyotp').post([verifyOtpvalidation, validate], verifyOtp);
Router.route('/resetpassword').post(
  [resetPasswordvalidation, validate],
  resetPassword
);

// Router.route('/logout').get(isAuthorized, logout)

module.exports = Router;
