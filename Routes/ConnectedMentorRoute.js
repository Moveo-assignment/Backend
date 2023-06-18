const express = require("express")

const {
	createConnectedMentor,
	getIsMentor,
	setIsMentor,
} = require("../Controllers/ConnectedMentorController")

const router = express.Router()

router.get("/createConnectedMentor", createConnectedMentor)
router.get("/getIsMentor", getIsMentor)
router.post("/setIsMentor", setIsMentor)

module.exports = router
