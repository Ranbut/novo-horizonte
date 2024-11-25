import Joi from 'joi';

export const createUserSchema = Joi.object({
  cpf: Joi.string().regex(/^\d+$/).min(11).max(11).required(),
  name:  Joi.string().required(),
  password: Joi.string().min(6).required(),
});

export const avatarSchema = Joi.object({
  avatar: Joi.string().required(),
});