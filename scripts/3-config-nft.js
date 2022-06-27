import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xD8C4f509F98326F27383ac83596F43B6c88e60eA");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Web 3 Learners Dao",
        description: "This NFT will give you access to Web3 Learners DAO!",
        image: readFileSync("scripts/assets/NFT.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();