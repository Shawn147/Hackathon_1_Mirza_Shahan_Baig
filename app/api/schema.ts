import Joi from "joi";
import bcrypt from "bcrypt";
export const registerSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name is required",
    "string.min": "Name must have at least {#limit} characters",
    "string.max": "Name can have at most {#limit} characters",
    "any.required": "Name is required",
  }),
  password: Joi.string().required().messages({
    "string.base": "Password must be a string",
    "string.empty": "Password is required",
    "string.pattern.base": "Password must contain only alphanumeric characters",
    "any.required": "Password is required",
  }),
  confirm_password: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "any.only": "Passwords must match",
      "any.required": "Confirm Password is required",
    }),
  dob: Joi.date().iso().max("now").required().messages({
    "date.base": "Date of birth must be a valid date",
    "date.iso": "Date of birth must be in ISO 8601 format",
    "date.max": "Date of birth cannot be in the future",
    "any.required": "Date of birth is required",
  }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required()
    .messages({
      "string.base": "Email must be a string",
      "string.empty": "Email is required",
      "string.email": "Email must be a valid email address",
      "any.required": "Email is required",
    }),
})
  .with("password", "confirm_password")
  .messages({
    "object.with": "Password and Confirm Password must be provided together",
  });
