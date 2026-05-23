import express from "express";

const router = express.Router();

import * as healthController from "../app/controller/healthController.js";

import * as demoController from "../app/controller/democontroller.js";

router.get("/health", healthController.health);

router.get("/demo-endpoint", demoController.demo);

// req parameter jukto
router.get("/demo1/:name/:age", demoController.demo1);

router.get("/demo2", demoController.demo2);

router.get("/demoh", demoController.demoh);

router.post("/demob", demoController.demob);

router.post("/demoform", demoController.demoform);

export default router;
