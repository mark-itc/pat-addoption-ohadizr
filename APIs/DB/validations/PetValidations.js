const Ajv = require("ajv");
const ajv = new Ajv();

module.exports.NewPetValidation = ajv.compile({
  type: "object",
  properties: {
    type: { type: "string" },
    name: { type: "string" },
    adoption_status: { type: 'string', enum: ["Adopt", "Foster", "Available"] },
    picture: { type: 'string' },
    height: { type: 'string' },
    weight: { type: 'string' },
    color: { type: 'string' },
    bio: { type: 'string' },
    age: { type: 'integer', minimum: 0, maximum: 30 },
    hypoallergenic: { type: 'string' },
    dietary_restrictions: { type: 'string',nullable: true },
    breed: { type: 'string' },
  },
  required: ["type", "name", "adoption_status", "picture", "height",],
  // required: ['type','name','adoption_status','picture','height','weight','age','breed'],

  additionalProperties: false,
});
