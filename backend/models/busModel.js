import mongoose from "mongoose";

// Schema for each bus stand timing entry
const busStandTimingSchema = new mongoose.Schema({
  busStandName: {
    type: String,
    required: true
  },
  usualArrivalTime: { type: Date, required: true }, // Usual arrival time
  usualDepartureTime: { type: Date, required: true }, // Usual departure time
  arrivalTime: { type: Date , default:null }, // Actual arrival time
  departureTime: { type: Date,default:null }  // Actual departure time
});

// Main bus schema
const busSchema = new mongoose.Schema({
  busId: { type: Number, unique: true },  // Auto-incrementing busId
  busName: { type: String, required: true, unique: true },
  busNumber: { type: String, required: true, unique: true },
  driver: { type: String, required: true },
  driverNumber: { type: String, required: true },
  route: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'BusRoute'
  },
  busStops: [busStandTimingSchema] // Array of bus stand timings
});

// Helper function to get the next busId
const getNextBusId = async () => {
  const lastBus = await Bus.findOne().sort({ busId: -1 });  // Get the bus with the highest busId
  return lastBus ? lastBus.busId + 1 : 1;  // Increment from the last busId, or start from 1
};

// Pre-save hook to assign a busId before saving
busSchema.pre('save', async function (next) {
  if (!this.busId) {  // Only assign busId if it's not already set
    this.busId = await getNextBusId();
  }
  next();
});

const Bus = mongoose.model("Bus", busSchema);
export default Bus;
