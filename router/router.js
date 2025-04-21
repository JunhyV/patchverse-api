const express = require('express');
const router = express.Router();

// Import Routes
const shamanRoutes = require('./shamanRoutes');
const spiritRoutes = require('./spiritRoutes');

router.use('/shamans', shamanRoutes);
router.use('/spirits', spiritRoutes);

module.exports = function () {
    return router;
};