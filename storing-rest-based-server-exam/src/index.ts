import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongooseInit from "./models";
import { MouseMovementInfo } from "./models/MouseMovement/types";
import MouseMovementModel from "./models/MouseMovement";
import cors from "cors";

dotenv.config();

const app = express();

(async function () {
  await mongooseInit();
})();

app.use(cors());
app.use(express.json());

app.post("/mouse-movement", async (req: Request, res: Response) => {
  const info = <MouseMovementInfo>req.body;

  try {
    const model = new MouseMovementModel({
      ...info,
      createdAt: new Date(),
    });
    const result = await model.save();

    return res.status(200).json({
      status: true,
      result,
    });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});

app.listen(8080, () => {
  console.log("[listen] mouse-movement api :)");
});
