import Joi from 'joi';

export const createPrescriptionSchema = Joi.object({
  medications: Joi.array().items(Joi.string()).required(),
  description: Joi.string().required(),
});