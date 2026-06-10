const { Schema, model } = require("mongoose");

const PortfolioSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    imageUrl: String,
    liveUrl: String,
    githubUrl: String,
    technologies: { type: [String], default: [] },
    tags: { type: [String], default: [] },
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

PortfolioSchema.virtual("id").get(function () {
  // Provide "id" instead of MongoDB's "_id" for the client
  return this._id.toHexString();
});

const PortfolioItem = model("PortfolioItem", PortfolioSchema);

module.exports = { PortfolioItem };
