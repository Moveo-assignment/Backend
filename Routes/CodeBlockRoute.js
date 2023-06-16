const express = require("express")

const { getAllCodeBlocks } = require("../Controllers/CodeBlockController")

const router = express.Router()

router.get("/getAllCodeBlocks", getAllCodeBlocks)

module.exports = router
