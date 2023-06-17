const mongoose = require("mongoose")

const ConnectedMentorSchema = new mongoose.Schema({
	isConnected: {
		type: Boolean,
		default: false,
	},
})

const ConnectedMentor = mongoose.model("ConnectedMentor", ConnectedMentorSchema)

module.exports = ConnectedMentor
