import Ajv from "ajv";
import ajvErrors from "ajv-errors";

const ajv = new Ajv({ removeAdditional: true, allErrors: true, $data: true });
ajvErrors(ajv);

const listingSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    image: {
      type: "string",
      nullable: false,
      errorMessage: { type: "image must be String" },
    },
    title: {
      type: "string",
      nullable: false,
      errorMessage: { type: "title must be String" },
    },
    description: {
      type: "string",
      nullable: false,
      errorMessage: { type: "image must be String" },
    },
    price: {
      type: "integer",
      nullable: false,
      errorMessage: { type: "price must be Integer" },
    },
    madeBy: {
      type: "string",
      nullable: false,
      errorMessage: { type: "madeBy must be String" },
    },
    school: {
      type: "string",
      nullable: false,
      errorMessage: { type: "school must be String" },
    },
    condition: {
      type: "string",
      nullable: false,
      errorMessage: { type: "condition must be String" },
    },
  },
};

export const validateListing = (listing, required) => {
  const schema = { ...listingSchema };

  if (required) {
    schema.required = [
      "image",
      "title",
      "description",
      "price",
      "madeBy",
      "school",
      "condition",
    ];
  }

  const validate = ajv.compile(schema);

  const valid = validate(listing);

  if (!valid) {
    return validate.errors;
  }
};
