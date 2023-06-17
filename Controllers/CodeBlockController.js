const CodeBlock = require("../Models/CodeBlock")
const mongoose = require("mongoose")

const createCodeBlock = async (req, res) => {
	const title = "hi"
	const code = "hello world!"

	try {
		const codeBlock = await CodeBlock.create({ title, code })
		res.status(200).json(codeBlock)
	} catch (err) {}
}

const getAllCodeBlocks = async (req, res) => {
	try {
		const codeBlocks = await CodeBlock.find()
		res.status(200).json(codeBlocks)
	} catch (error) {
		res.status(500).json({ error: "Server error" })
	}
}

const getCodeBlockById = async (req, res) => {
	try {
		const codeBlock = await CodeBlock.find({ _id: req.params.id })
		res.status(200).json(codeBlock)
	} catch (error) {
		res.status(500).json({ error: "Server error" })
	}
}

module.exports = { createCodeBlock, getAllCodeBlocks, getCodeBlockById }
