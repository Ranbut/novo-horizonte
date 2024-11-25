import Joi from 'joi';

export const createUserSchema = Joi.object({
  name:  Joi.string().required(),
  cpf: Joi.string().regex(/^\d+$/).min(11).max(11).required(),
  password: Joi.string().min(6).required(),
  adress: Joi.string(),
  phone: Joi.string(),
  email: Joi.string().email(),
});

export const updateInfoSchema = Joi.object({
  adress: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});