const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send('Blog Page')
})

module.exports = router
