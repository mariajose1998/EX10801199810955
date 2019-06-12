const express = require('express');
const router = express.Router();
const thingsApi= require('./things');

router.use('/things', thingsApi);

module.exports=router;