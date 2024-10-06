import busStand from '../models/busStandModel.js';

// add a bus stand
export const addBusStand = async (req, res) => {
    try {
        const newBusStand = new busStand(req.body);
        await newBusStand.save();
        res.status(201).json(newBusStand);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getallBusStand = async (req, res) => {
    try {
        const busStands = await busStand.find();
        res.status(200).json(busStands);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}