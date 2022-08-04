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
getAllAxies: [Axie]
`;

export const resolver = {
  getAllAxies: async (_: any) => {
    try {
      const aquatics = await Aquatics.find({});
      const beasts = await Beasts.find({});
      const birds = await Birds.find({});
      const bugs = await Bugs.find({});
      const dawns = await Dawns.find({});
      const dusks = await Dusks.find({});
      const mechs = await Mechs.find({});
      const plants = await Plants.find({});
      const reptiles = await Reptiles.find({});

      return [
        ...aquatics,
        ...beasts,
        ...birds,
        ...bugs,
        ...dawns,
        ...dusks,
        ...mechs,
        ...plants,
        ...reptiles,
      ];
    } catch (err) {
      console.log("ERR IN GETTING AXIES: ", err);
      throw new Error(err as string);
    }
  },
};
