ConnectedMentor = require("../Models/ConnectedMentor")

const createConnectedMentor = async (req, res) => {
	const state = true
	try {
		const connectedMentor = await ConnectedMentor.create({ isConnected: state })
		res.status(200).json(connectedMentor)
	} catch (error) {}
}

const getIsMentor = async (req, res) => {
	try {
		const state = await ConnectedMentor.find({})
		res.status(200).json(state[0].isConnected)
	} catch (error) {}
}

const setIsMentor = async (req, res) => {
	try {
		const { isConnected } = req.body // Extract isConnected from req.body

		const mentors = await ConnectedMentor.find({})

		mentors[0].isConnected = isConnected

		await mentors[0].save()

		res.status(200).json({ message: "State updated successfully" })
	} catch (error) {
		console.error("Error setIsMentor:", error)
		res.status(500).json({ error: "Internal server error" })
	}
}

module.exports = { createConnectedMentor, getIsMentor, setIsMentor }
