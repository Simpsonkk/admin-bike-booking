import Joi, { CustomHelpers } from 'joi';

import { BikeColor } from '~/bundles/main/enums/bike-color.enum.js';
import { BikeCreateValidationRule } from '~/bundles/main/enums/bike-create.validation-rule.enum.js';
import { BikeStatus } from '~/bundles/main/enums/bike-status.enum.js';
import { BikeType } from '~/bundles/main/enums/bike-type.enum.js';
import { WheelSize } from '~/bundles/main/enums/wheel-size.enum.js';
import { CreateBike } from '~/bundles/main/types/create-bike.type.js';

const wheelSizeValues = Object.values(WheelSize).filter(
  (value) => typeof value === 'number',
);

const validatePrice = (value: string, helpers: CustomHelpers) => {
  const numericValue = parseFloat(value);

  if (isNaN(numericValue) || numericValue < BikeCreateValidationRule.MinPrice) {
    return helpers.error('number.min');
  }

  return numericValue;
};

const validateWheelSize = (value: string, helpers: CustomHelpers) => {
  const numericValue = parseFloat(value);

  if (isNaN(numericValue) || !wheelSizeValues.includes(numericValue)) {
    return helpers.error('number.min');
  }

  return numericValue;
};

export const CreateBikeSchema = Joi.object<CreateBike, true>({
  name: Joi.string().trim().min(BikeCreateValidationRule.MinLength).required(),

  type: Joi.string()
    .trim()
    .valid(...Object.values(BikeType))
    .required(),

  color: Joi.string()
    .trim()
    .valid(...Object.values(BikeColor))
    .required(),

  status: Joi.string()
    .trim()
    .valid(...Object.values(BikeStatus))
    .required(),

  wheelSize: Joi.string()
    .custom(validateWheelSize, 'custom wheel size validation')
    .required()
    .messages({
      'number.min': `"wheel size" should be one of the numbers ${wheelSizeValues.join()}`,
    }),

  price: Joi.string()
    .custom(validatePrice, 'custom price validation')
    .required()
    .messages({
      'number.min': `"price" should be a number at least ${BikeCreateValidationRule.MinPrice}`,
    }),

  description: Joi.string()
    .trim()
    .min(BikeCreateValidationRule.MinLength)
    .required(),
});
