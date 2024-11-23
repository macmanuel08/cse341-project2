const validator = require('../helpers/validate');
const saveEmployee = async (req, res, next) => {
    const validationRule = {
        "name": "required|string",
        "position": "required|string",
        "email": "required|string|email",
        "phone": "required|string",
        "department": "required|string",
        "hireDate": "required|date",
        "salary": "required|integer"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Invalid employee info',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}
module.exports = {
    saveEmployee
};