import { model, Schema } from "mongoose";
import { MouseMovementInfo } from "./types";

const schema = new Schema<MouseMovementInfo>({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  createdAt: { type: Date, required: true },
});

const MouseMovementModel = model("move_movement", schema);
export default MouseMovementModel;
