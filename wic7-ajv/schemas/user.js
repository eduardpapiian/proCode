const user = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 2,
      maxLength: 50,
    },
    username: {
      type: 'string',
      minLength: 2,
      maxLength: 50,
    },
    pwd: {
      type: 'string',
      minLength: 6,
    },
    profile: {
      type: 'object',
      properties: {
        age: {
          type: 'number',
          minimum: 18,
          exclusiveMaximum: 30,
        },
      },
    },
  },
};
module.exports = user;
