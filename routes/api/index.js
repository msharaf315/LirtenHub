//this is an index that somewhat combines all our apis
const express = require('express');
const router = express.Router();

//use your api here
router.use('/admins', require('./admins'));

module.exports = router;