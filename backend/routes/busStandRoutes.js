import express from "express";
const router=express.Router();
import { addBusStand , getallBusStand } from "../controllers/busStandController.js";

router.post("/add", addBusStand);
router.get("/all", getallBusStand);


export default router;