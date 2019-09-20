const user = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    model: {
      type: 'string',
      minLength: 2,
      maxLength: 50,
    },
    mileage: {
      type: ["string", "number"],
      // minLength: 2,
      // maxLength: 50,
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
        num: ["ABS", "Automatic", "ESP"]
      }
    }
  },
};
module.exports = user;
