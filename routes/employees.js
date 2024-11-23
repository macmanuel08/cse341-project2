const express = require("express")
const router = new express.Router();
const employeesController = require('../controllers/employees');
const validate = require('../middleware/validation-middleware')

router.get("/", employeesController.getAll);
router.get("/:id", employeesController.getSingle);
router.post(
    '/',
    validate.saveEmployee,
    employeesController.createEmployee
);
router.put(
    '/:id',
    validate.saveEmployee,
    employeesController.updateEmployee
);
router.delete('/:id', employeesController.deleteEmployee);

module.exports = router;