require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const http = require("http")
const { Server } = require("socket.io")

const app = express()
app.use(express.json())
app.use(cors())
const server = http.createServer(app)

const io = new Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
})

io.on("connection", (socket) => {
	socket.on("join_room", (room) => {
		socket.join(room.id)
	})

	socket.on("update_code", (data) => {
		socket.to(data.roomId).emit("receive_changed_code", data.code)
	})
})

server.listen(3001, () => {
	console.log("Server (socket.io) is running")
})

const CodeBlockRoute = require("./Routes/CodeBlockRoute")
const ConnectedMentorRoute = require("./Routes/ConnectedMentorRoute")

app.use("/api", CodeBlockRoute)
app.use("/api", ConnectedMentorRoute)

const uri = process.env.URI

async function connect() {
	try {
		await mongoose.connect(uri)
		console.log("Connected to MongoDB")
	} catch (e) {
		console.log("Couldn't connect to MongoDB")
	}
}

connect()

module.exports = app
