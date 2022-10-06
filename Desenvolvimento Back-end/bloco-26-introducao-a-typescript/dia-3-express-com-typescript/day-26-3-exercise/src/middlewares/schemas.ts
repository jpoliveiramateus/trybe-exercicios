import Joi from 'joi';

const createUserSchema = Joi.object({
	name: Joi.string().min(3).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).max(8).required(),
});

export = {
	createUserSchema,
};