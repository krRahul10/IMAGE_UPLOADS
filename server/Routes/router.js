const express = require("express")
const router = new express.Router()
const controller = require("../Controllers/userControllers")
const upload = require("../multerconfig/storageConfig")

router.post("/register",upload.single("photo"),controller.userRegister)

module.exports = router