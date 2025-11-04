const express = require("express")
const app = express()

app.use(express.json())

// PERHATIKAN INI ↓↓↓
const authController = require("../controller/auth.controller")

app.post("/login", authController.authenticate)
app.get("/check", authController.authorize)

module.exports = app
