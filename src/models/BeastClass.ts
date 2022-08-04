import { Schema, model, Document } from "mongoose";

interface Beast extends Document {
  axieId: string;
  name: boolean;
  stage: string;
  class: string;
  currentPrice: number;
}

const beastClassScheme = new Schema(
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

const Beasts = model<Beast>("beast_class", beastClassScheme, "beast_class");
export { Beast, Beasts };
