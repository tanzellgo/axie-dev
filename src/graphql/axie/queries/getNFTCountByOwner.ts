import Web3 from "web3";
import Provider from "@truffle/hdwallet-provider";
import ABI from "../../../constants/abi";

export const schema = `
  getNFTCountByOwner(
    address: String!
  ): Int
`;

export const resolver = {
  getNFTCountByOwner: async (_: any, { address }: { address: string }) => {
    try {
      const provider = new Provider(
        "primary night pumpkin upset purpose music sing cotton album spirit ensure glide",
        "https://mainnet.infura.io/v3/6121cb43944e400aba70afa15d2950a1"
      );
      const web3 = new Web3(provider);
      const AxieContract = new web3.eth.Contract(
        ABI,
        "0xF5b0A3eFB8e8E4c201e2A935F110eAaF3FFEcb8d"
      );

      const count = await AxieContract.methods.balanceOf(address).call();

      return count;
    } catch (err) {
      console.log("ERR IN GETTING NFT COUNT: ", err);
      throw new Error(err as string);
    }
  },
};
