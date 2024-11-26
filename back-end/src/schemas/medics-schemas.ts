import Joi from 'joi';

export const createMedicSchema = Joi.object({
  name:  Joi.string().required(),
  cpf: Joi.string().regex(/^\d+$/).min(11).max(11).required(),
  password: Joi.string().min(6).required(),
  specialty: Joi.string().required(),
  adress: Joi.string(),
  phone: Joi.string(),
  email: Joi.string().email(),
});