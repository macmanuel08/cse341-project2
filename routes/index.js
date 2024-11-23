const express = require("express")
const router = new express.Router();
const employees = require('./employees');
const swaggerRoute = require('./swagger');

router.use('/', swaggerRoute);
router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World');
});
router.use('/employees', employees);

module.exports = router;