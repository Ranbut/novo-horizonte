import Joi from 'joi';

export const createUserSchema = Joi.object({
  name:  Joi.string().required(),
  cpf: Joi.string().regex(/^\d+$/).min(11).max(11).required(),
  password: Joi.string().min(6).required(),
  adress: Joi.string(),
  phone: Joi.string(),
  email: Joi.string().email(),
  birthday: Joi.date().required()
});

export const updateInfoSchema = Joi.object({
  adress: Joi.string().allow(null, ''),
  phone: Joi.string().allow(null, ''),
  email: Joi.string().email().allow(null, ''),
  password: Joi.string().min(6)
});