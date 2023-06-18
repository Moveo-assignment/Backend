const CodeBlock = require("../Models/CodeBlock")

const createCodeBlock = async (req, res) => {
	const title = "Two Sum"
	const code = "hello world!"
	const solution = "bye world!"

	try {
		const codeBlock = await CodeBlock.create({ title, code, solution })
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
