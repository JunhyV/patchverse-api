const express = require("express");
const router = express.Router();
const shamanController = require("../controllers/shamanController");

// Shamans routes
router.post("/", shamanController.newShaman);
router.get("/", shamanController.getShamans);
router.get("/:idShaman", shamanController.showShaman);
router.put("/:idShaman", shamanController.updateShaman);
router.delete("/:idShaman", shamanController.deleteShaman);

module.exports = router;