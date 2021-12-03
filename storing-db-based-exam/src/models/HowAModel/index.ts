import { model, Schema } from "mongoose";
import mongooseInit from "..";
import { AInfo } from "./types";

mongooseInit();

const aSchema = new Schema<AInfo>({
  count: { type: Number, require: true },
  createdAt: { type: Date, require: true },
});

const HowAModel = model<AInfo>("howamodel", aSchema);

export default HowAModel;
