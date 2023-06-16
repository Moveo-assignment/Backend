require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())

const CodeBlockRoute = require("./Routes/CodeBlockRoute")

app.use("/api", CodeBlockRoute)

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

// const { createCodeBlock } = require("./Controllers/CodeBlockController")

// createCodeBlock()

// const { getAllCodeBlocks } = require("./Controllers/CodeBlockController")

// getAllCodeBlocks()

module.exports = app
