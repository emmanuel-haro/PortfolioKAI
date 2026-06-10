const { Schema, model } = require("mongoose");

const ContactSchema = new Schema(
  {
    name: String,
    email: { type: String, required: true },
    subject: String,
    message: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (_doc, ret) => {
        ret.id = ret.id || ret._id?.toString();
        delete ret._id;
        return ret;
      },
    },
  }
);

ContactSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

const ContactMessage = model("ContactMessage", ContactSchema);

module.exports = { ContactMessage };
