import Joi from 'joi';

export const signInSchema = Joi.object ({
  cpf: Joi.string().regex(/^\d+$/).min(11).max(11).required(),
  password: Joi.string().required(),
});