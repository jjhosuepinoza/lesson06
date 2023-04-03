const passwordComplexity = require('joi-password-complexity');
// const Joi = require('joi');
const complexityOptions = {
  min: 8,
  max: 26,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 4
};

module.exports.passwordPass = (passwordToCheck) => {
  return passwordComplexity(complexityOptions, 'Password').validate(passwordToCheck);
};


// const authSchema = Joi.object({
//     emailAddress: Joi.string().email().lowercase().required()
//   });

// module.exports = {
//     authSchema
// }
