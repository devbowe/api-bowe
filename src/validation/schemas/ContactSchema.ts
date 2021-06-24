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
  utm_identifier: joi.string(),
  utm_source: joi.string(),
  utm_medium: joi.string(),
  utm_campaign: joi.string(),
  utm_term: joi.string(),
  utm_content: joi.string(),
});
