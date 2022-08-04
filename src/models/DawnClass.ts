import { Schema, model, Document } from "mongoose";

interface Dawn extends Document {
  axieId: string;
  name: boolean;
  stage: string;
  class: string;
  currentPrice: number;
}

const dawnClassScheme = new Schema(
  {
    axieId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    stage: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    currentPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Dawns = model<Dawn>("dawn_class", dawnClassScheme, "dawn_class");
export { Dawn, Dawns };
