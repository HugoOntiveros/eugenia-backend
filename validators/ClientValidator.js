const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      last_name: Joi.string().required(),
      phone: Joi.string().required(),
      email: Joi.string().required(),
      address: Joi.string().required(),
    }),
  }),
  findOne: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  updateOne: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      last_name: Joi.string().required(),
      phone: Joi.string().required(),
      email: Joi.string().required(),
      address: Joi.string().required(),
    }),
  }),
  deleteOne: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
};
