const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            email: Joi.string().min(5).required(),
            password: Joi.string().min(6).required(),
            firstName: Joi.string().min(2).required(),
            middleName: Joi.string().min(1).required(),
            lastName: Joi.string().min(1).required(),
            age: Joi.number().required(),
        }

        return Joi.validate(request, createSchema)
    },
    loginValidation: request => {
        const loginSchema = {
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }
        return Joi.validate(request, loginSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            firstName: Joi.string().min(2),
            middleName: Joi.string().min(1),
            lastName: Joi.string().min(1),
            age: Joi.number(),
            email: Joi.string().min(5),
            password: Joi.string.min(6)
        }

        return Joi.validate(request, updateSchema)
    }, 
   
}