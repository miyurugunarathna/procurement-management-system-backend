import { Joi } from "celebrate";

export const SignupBodySchema = Joi.object({
  name: Joi.string().required().min(3),
  nic: Joi.string().required().min(10).max(12),
  email: Joi.string().email().required(),
  mobile: Joi.string().min(10).required(),
  department: Joi.string()
    .required()
    .valid("PROCUREMENT", "MANAGEMENT", "ONSITE", "OTHER"),
  password: Joi.string()
    .required()
    .pattern(
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
    ),
  role: Joi.string().valid("SITE_MANAGER", "PROCUREMENT", "SENIOR", "SUPPLIER"),
  siteName: Joi.when("role", {
    is: "SITE_MANAGER",
    then: Joi.string().required(),
    otherwise: Joi.forbidden(),
  }),
});

export const LoginBodySchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
