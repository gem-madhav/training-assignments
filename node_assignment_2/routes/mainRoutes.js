const express = require("express");
const mainController = require("../controllers/mainController");

const router = express.Router();

//Post Method
router.post("/", mainController.postRecord);

//Get all Method
router.get("/", mainController.getRecords);

//Get one Method
router.get("/:recordId", mainController.getRecord);

//Update by ID Method
router.put("/:recordId", mainController.updateRecord);

//Delete by ID Method
router.delete("/:recordId", mainController.deleteRecord);

module.exports = router;
