const { check, param } = require('express-validator');
const { validateResult } = require('../middlewares/validate-result');
const { idValidate } = require('../helpers/db-validators');

const validateFields = [
    check('technologyName', "The field 'technologyName' is required.").not().isEmpty(),
    check('category', "The field 'category' is required.").not().isEmpty(),
    check('description', "The field 'description' is required.").not().isEmpty(),
    check('documentationLink', "The field 'documentationLink' is required.").not().isEmpty(),
    validateResult
];

const validateID = [
    param('technologyID', "The 'technologyID' parameter is not a valid UUID V4 id.").isUUID(),
    param('technologyID').custom( idValidate ),
    validateResult
];

module.exports = {
    validateFields,
    validateID
}