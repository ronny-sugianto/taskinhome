const express = require('express');
const router = express.Router();

const validationService = require('../services/validation.service');
const {createValidation} = require('../controller/validation.controller');

const Services = new validationService();

router.post('/', (req,res) => createValidation(req,res,Services));


module.exports = router;