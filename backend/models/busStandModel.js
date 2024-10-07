import mongoose from 'mongoose';
export const busStandSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      // unique: true
    },
    busStandNumber:{
      type:String,
      required:true,
      //unique:true
    },
    usualArrivalTime: {
      type: Date,
      //required: true
    },
    arrivalTime: {
      type: Date
    },
    usualDepartureTime: {
      type: Date,
      //required: true
    },
    departureTime: {
      type: Date
    }
  });

  const newBusStandSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      // unique: true
    },
    busStandId:{
      type:String,
      required:true,
      unique:true
   
    }
  });

  // Create a compound index for name and busStandNumber to be unique together
//busStandSchema.index({ name: 1, busStandNumber: 1 }, { unique: true });

  const busStand = new mongoose.model('BusStand', newBusStandSchema);

  export default busStand;
  