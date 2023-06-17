const express = require("express")

const {
	getAllCodeBlocks,
	getCodeBlockById,
} = require("../Controllers/CodeBlockController")

const router = express.Router()

router.get("/getAllCodeBlocks", getAllCodeBlocks)
router.get("/getCodeBlockById/:id", getCodeBlockById)

module.exports = router
