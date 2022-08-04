import { Schema, model, Document } from "mongoose";

interface Dusk extends Document {
  axieId: string;
  name: boolean;
  stage: string;
  class: string;
  currentPrice: number;
}

const duskClassScheme = new Schema(
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

const Dusks = model<Dusk>("dusk_class", duskClassScheme, "dusk_class");
export { Dusk, Dusks };
