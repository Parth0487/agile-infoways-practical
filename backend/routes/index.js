var express = require('express');
var router = express.Router();
var userController = require('../src/controllers/user.controller');

var authHelper = require('../src/utils/auth.middleware')

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/application', userController.createApplication)

router.post('/login', userController.login)

router.get('/applications', authHelper.verifyToken, userController.getApplications)

module.exports = router;
