import {
  Aquatics,
  Beasts,
  Birds,
  Bugs,
  Dawns,
  Dusks,
  Mechs,
  Plants,
  Reptiles,
} from "../../../models";

export const schema = `
deleteAxies: Boolean
`;

export const resolver = {
  deleteAxies: async (_: any) => {
    try {
      await Aquatics.deleteMany({});
      await Beasts.deleteMany({});
      await Birds.deleteMany({});
      await Bugs.deleteMany({});
      await Dawns.deleteMany({});
      await Dusks.deleteMany({});
      await Mechs.deleteMany({});
      await Plants.deleteMany({});
      await Reptiles.deleteMany({});

      return true;
    } catch (err) {
      console.log("ERR IN DELETING AXIES: ", err);
      throw new Error(err as string);
    }
  },
};
