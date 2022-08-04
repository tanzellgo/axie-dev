import { Schema, model, Document } from "mongoose";

interface Bug extends Document {
  axieId: string;
  name: boolean;
  stage: string;
  class: string;
  currentPrice: number;
}

const bugClassScheme = new Schema(
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

const Bugs = model<Bug>("bug_class", bugClassScheme, "bug_class");
export { Bug, Bugs };
