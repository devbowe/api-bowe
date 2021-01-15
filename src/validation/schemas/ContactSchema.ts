import joi from 'joi';

export default joi.object().keys({
  name: joi.string(),
  email: joi.string(),
  phone: joi.string(),
  modelbusiness: joi.string(),
  namebusiness: joi.string(),
  numberemployees: joi.string(),
  office: joi.string(),
  optionbusiness: joi.string(),
  website: joi.string(),
});
