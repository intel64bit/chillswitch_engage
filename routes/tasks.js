const express = require('express');
const router = express.Router();

router.get('/tasks', (req, res, next) => {
    res.send('ChillSwitch Task API');
});

module.exports = router;

