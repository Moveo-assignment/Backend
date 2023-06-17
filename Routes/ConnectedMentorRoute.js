const express = require("express")

const {
	createConnectedMentor,
	getCurrentState,
	setCurrentState,
} = require("../Controllers/ConnectedMentorController")

const router = express.Router()

router.get("/createConnectedMentor", createConnectedMentor)
router.get("/getCurrentState", getCurrentState)
router.post("/setCurrentState", setCurrentState)

module.exports = router
