import Joi from 'joi';

export const createPrescriptionSchema = Joi.object({
  medications: Joi.array().required(),
  description: Joi.string().required(),
  expirationDate: Joi.date().required()
});