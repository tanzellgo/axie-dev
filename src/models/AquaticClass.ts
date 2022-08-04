import { Schema, model, Document } from "mongoose";

interface Aquatic extends Document {
  axieId: string;
  name: boolean;
  stage: string;
  class: string;
  currentPrice: number;
}

const aquaticClassScheme = new Schema(
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

const Aquatics = model<Aquatic>(
  "aquatic_class",
  aquaticClassScheme,
  "aquatic_class"
);
export { Aquatic, Aquatics };
