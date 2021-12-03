#!/use/bin/env node

// 사용자들은 한 라인에 몇 개의 a를 이용했을까?
import readline from "readline";
import dotenv from "dotenv";
import mongooseInit from "./models";
import HowAModel from "./models/HowAModel";

dotenv.config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(async function () {
  await mongooseInit();
})();

const start = async () => {
  for await (const line of rl) {
    const aArr = line.match(/[aA]/g);
    console.log(aArr);
    const report = new HowAModel({
      count: aArr ? aArr.length : 0,
      createdAt: new Date(),
    });
    report.save();
  }
};

start();
