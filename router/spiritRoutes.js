const express = require("express");
const router = express.Router();
const spiritController = require("../controllers/spiritController");

// Spirits
router.post("/", spiritController.newSpirit);
router.get("/", spiritController.getSpirits);
router.get("/:idSpirit", spiritController.showSpirit);
router.put("/:idSpirit", spiritController.updateSpirit);
router.delete("/:idSpirit", spiritController.deleteSpirit);

module.exports = router;