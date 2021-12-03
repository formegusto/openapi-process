import { connect } from "mongoose";

export default async function mongooseInit() {
  const { MONGO_HOST, MONGO_PORT, MONGO_APP } = process.env;
  if (MONGO_HOST) {
    const connectURL = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_APP}`;
    try {
      await connect(connectURL);
    } catch (err: any) {
      console.error(err);
    }
    console.log("[mongoose] connected :)");
  }
}
