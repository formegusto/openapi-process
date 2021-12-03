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
    const count = aArr ? aArr.length : 0;
    console.log(line, "a Count ===>", count);
    const report = new HowAModel({
      count: count,
      createdAt: new Date(),
    });
    report.save();
  }
};

start();
