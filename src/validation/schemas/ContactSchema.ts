import joi from 'joi';

export default joi.object().keys({
  name: joi.string(),
  email: joi.string(),
  phone: joi.string(),
});
