import BusRoute from "../models/busRouteModel.js";

// add a bus route
export const addBusRoute = async (req, res) => {
    try {
        const newBusRoute = new BusRoute(req.body);
        await newBusRoute.save();
        res.status(201).json(newBusRoute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//show all bus route
export const showBusRoute = async (req, res) => {
    try {
        const busRoute = await BusRoute.find();
        res.status(200).json(busRoute);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


//return a route mongoose id considering source and destination in req.body
export const getRouteId = async (req, res) => {
    try {
        const { source, destination } = req.body;
    
        if (!source || !destination) {
          return res.status(400).json({ error: 'Source and destination are required' });
        }
    
        const busRoute = await BusRoute.findOne({
          $and: [
            { 'busStands': { $elemMatch: { name: source } } },
            { 'busStands': { $elemMatch: { name: destination } } }
          ]
        });
    
        if (!busRoute) {
          return res.status(404).json({ error: 'Bus route not found' });
        }
    
        // Check if the source comes before the destination in the route
        const sourceIndex = busRoute.busStands.findIndex(stand => stand.name === source);
        const destinationIndex = busRoute.busStands.findIndex(stand => stand.name === destination);
    
        if (sourceIndex === -1 || destinationIndex === -1 || sourceIndex >= destinationIndex) {
          return res.status(404).json({ error: 'Bus route not found' });
        }
    
        res.json({ busRouteId: busRoute._id });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
}
   