import formatObject from "@utils/formatObject";
import axios from "axios";
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
postAxies: [Axie]
`;

export const resolver = {
  postAxies: async (_: any) => {
    try {
      const aquatics: any[] = [];
      const beasts: any[] = [];
      const birds: any[] = [];
      const bugs: any[] = [];
      const dawns: any[] = [];
      const dusks: any[] = [];
      const mechs: any[] = [];
      const plants: any[] = [];
      const reptiles: any[] = [];

      let startIndex: number = 0;
      let endIndex: number = 100;

      for (let i = 0; i < 3; i++) {
        const result = await axios.post(
          "https://graphql-gateway.axieinfinity.com/graphql",
          {
            operationName: "GetAxieLatest",
            variables: {
              from: startIndex,
              size: endIndex,
              sort: "PriceAsc",
              auctionType: "Sale",
              criteria: {},
            },
            query:
              "query GetAxieLatest(\n  $auctionType: AuctionType\n  $criteria: AxieSearchCriteria\n  $from: Int\n  $sort: SortBy\n  $size: Int\n  $owner: String\n) {\n  axies(\n    auctionType: $auctionType\n    criteria: $criteria\n    from: $from\n    sort: $sort\n    size: $size\n    owner: $owner\n  ) {\n    results {\n      ...AxieRowData\n      }\n    __typename\n  }\n}\n\nfragment AxieRowData on Axie {\n  id\n  class\n  name\n  stage\n  auction {\n    ...AxieAuction\n  }\n}\n\nfragment AxieAuction on Auction {\n  currentPriceUSD\n}",
          }
        );

        const axies = result.data.data.axies.results;

        for (const axie of axies) {
          switch (axie.class) {
            case "Aquatic":
              aquatics.push(formatObject(axie));
              break;
            case "Beast":
              beasts.push(formatObject(axie));
              break;
            case "Bird":
              birds.push(formatObject(axie));
              break;
            case "Bug":
              bugs.push(formatObject(axie));
              break;
            case "Dawn":
              dawns.push(formatObject(axie));
              break;
            case "Dusk":
              dusks.push(formatObject(axie));
              break;
            case "Mech":
              mechs.push(formatObject(axie));
              break;
            case "Plant":
              plants.push(formatObject(axie));
              break;
            default:
              reptiles.push(formatObject(axie));
          }
        }

        startIndex = endIndex;
        endIndex += 100;
      }

      const postedAquatics = await Aquatics.insertMany(aquatics);
      const postedBeasts = await Beasts.insertMany(beasts);
      const postedBirds = await Birds.insertMany(birds);
      const postedBugs = await Bugs.insertMany(bugs);
      const postedDawns = await Dawns.insertMany(dawns);
      const postedDusks = await Dusks.insertMany(dusks);
      const postedMechs = await Mechs.insertMany(mechs);
      const postedPlants = await Plants.insertMany(plants);
      const postedReptiles = await Reptiles.insertMany(reptiles);

      return [
        ...postedAquatics,
        ...postedBeasts,
        ...postedBirds,
        ...postedBugs,
        ...postedDawns,
        ...postedDusks,
        ...postedMechs,
        ...postedPlants,
        ...postedReptiles,
      ];
    } catch (err) {
      console.log("ERR IN POSTING AXIES: ", err);
      throw new Error(err as string);
    }
  },
};
