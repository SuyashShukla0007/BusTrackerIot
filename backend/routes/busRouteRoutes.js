import express from "express";
const router=express.Router();
import { addBusRoute ,showBusRoute ,getRouteId , } from "../controllers/busRouteController.js";

router.post("/add", addBusRoute);
router.get("/show", showBusRoute);
router.post("/getRouteId", getRouteId); //gets mongoose id of route from source and destination

export default router;