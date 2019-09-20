const car = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    model: {
      type: 'string',
      minLength: 2,
      maxLength: 50,
    },
    mileage: {
      anyOf: [
        { type: "string",
          enum: ["new"]
        },
        { type: "number",
          minimum: 0,
          maximum: 9000000,
        }
      ]
    },
    price: {
      type: 'number',
      minimum: 100,
      maximum: 1000000,
    },
    functions: {
      type:'array',
      items: {
        type: "string",
        enum: ["ABS", "Automatic", "ESP", "tunning"]
      }
    }
  },
};
module.exports = car;
