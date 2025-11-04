const express = require("express")
const app = express()

app.use(express.json())

const attendancecontroller = require("../controller/attendance.controller")
const authcontroller = require("../controller/auth.controller")

// GET semua attendance
app.get("/", authcontroller.authorize, attendancecontroller.getAllAttendance)
app.get("/history/:id", authcontroller.authorize, attendancecontroller.getHistory)
app.get("/summary/:id", authcontroller.authorize, attendancecontroller.getSummary)
app.get("/:id", authcontroller.authorize, attendancecontroller.getAttendances)
app.post("/", authcontroller.authorize, attendancecontroller.addAttendance)
app.post("/analysis", authcontroller.authorize, attendancecontroller.getAnalysis)

module.exports = app
