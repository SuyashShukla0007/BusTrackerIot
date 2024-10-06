import mongoose from "mongoose";
import { busStandSchema } from "./busStandModel.js";
  const busRouteSchema = new mongoose.Schema({
    routeName: {
      type: String,
      required: true,
      unique: true
    },
    busStands: [busStandSchema],
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  });
  
  const BusRoute = mongoose.model('BusRoute', busRouteSchema);
  
  export default BusRoute;