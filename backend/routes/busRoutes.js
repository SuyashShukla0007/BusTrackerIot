import express from "express";
const router=express.Router();

import { addBus , showBus ,getBusByRoute ,markBusStatus  ,getBusById} from "../controllers/busController.js";


router.post("/add", addBus);
router.get("/show", showBus);
router.get("/show/:id", getBusById); //id in parameter
router.get("/getBusByRoute/:route", getBusByRoute);  //route mongoose id in parameter
router.put("/markBusStatus/:id", markBusStatus);  //bus id in parameter

export default router;