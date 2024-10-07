import Bus from "../models/busModel.js";
import BusStand from "../models/busStandModel.js";

// add a bus
export const addBus = async (req, res) => {
    try {
        const newBus = new Bus(req.body);
        await newBus.save();
        res.status(201).json(newBus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//show all bus 
export const showBus = async (req, res) => {
    try {
        const bus = await Bus.find();
        res.status(200).json(bus);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//get bus by route
export const getBusByRoute = async (req, res) => {
    try {
        const bus = await Bus.find({ route: req.params.route });
        res.status(200).json(bus);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//mark arrival time at a partucular bus stand for a bus
export const markBusStatus = async (req, res) => {
    try {
       
        const { busStandId, status ,busId } = req.body;

        const busStandName=await BusStand.findOne({busStandId:busStandId});

        // Validate input
        if (!busStandName || !status) {
            return res.status(400).json({ message: "Bus ID, bus stand name, and status are required" });
        }

        if (status !== "arrived" && status !== "departed") {
            return res.status(400).json({ message: "Status must be either 'arrived' or 'departed'" });
        }

        const bus = await Bus.findOne({ busId: busId });
        if (!bus) {
            return res.status(404).json({ message: "Bus not found" });
        }  
        console.log(busStandName);
        

        const busStandIndex = bus.busStops.findIndex(stop => stop.busStandName === busStandName.name);
        if (busStandIndex === -1) {
            return res.status(404).json({ message: "Bus stand not found for this bus" });
        }

        const currentTime = new Date();

        if (status === "arrived") {
            bus.busStops[busStandIndex].arrivalTime = currentTime; 
        } else if (status === "departed") {
            bus.busStops[busStandIndex].departureTime = currentTime;
        }

        await bus.save();

        res.status(200).json({
            message: `Bus ${status} time marked successfully for ${busStandName.name}`,
            bus: bus
        });
    } catch (error) {
        console.error("Error in markBusStatus:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

//get bus by id
export const getBusById = async (req, res) => {
    try {
        const bus = await Bus.findById(req.params.id);
        res.status(200).json(bus);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


//mark arrival and departure of each bus stand of a particular all busses null
export const resetBusStatus = async (req, res) => {
    try {
        const buses = await Bus.find();
        buses.forEach(async bus => {
            bus.busStops.forEach(stop => {
                stop.arrivalTime = null;
                stop.departureTime = null;
            });
            await bus.save();
        });
        res.status(200).json({ message: "All bus statuses reset" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};