import { Schema, model, Document } from "mongoose";

interface Reptile extends Document {
  axieId: string;
  name: boolean;
  stage: string;
  class: string;
  currentPrice: number;
}

const reptileClassScheme = new Schema(
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

const Reptiles = model<Reptile>(
  "reptile_class",
  reptileClassScheme,
  "reptile_class"
);
export { Reptile, Reptiles };
