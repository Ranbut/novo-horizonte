import Joi from 'joi';

export const reportSchema = Joi.object({
  title: Joi.string().max(255).required(),
  text: Joi.string().required(),
});