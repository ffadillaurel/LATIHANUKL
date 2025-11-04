// Mengimport data user dari user.controller
const { userList } = require("./user.controller");


// Data dummy attendance
let attendanceList = [
    { attendance_id: 1, user_id: 1, date: new Date("2025-10-14"), time: "08:01:12", status: "hadir" },
    { attendance_id: 2, user_id: 2, date: new Date("2025-10-14"), time: "08:10:33", status: "hadir" },
    { attendance_id: 3, user_id: 3, date: new Date("2025-10-14"), time: "—", status: "sakit" },
    { attendance_id: 4, user_id: 4, date: new Date("2025-10-14"), time: "—", status: "alpa" },
    { attendance_id: 5, user_id: 1, date: new Date("2025-10-15"), time: "08:00:25", status: "hadir" },
    { attendance_id: 6, user_id: 2, date: new Date("2025-10-15"), time: "08:02:58", status: "hadir" },
    { attendance_id: 7, user_id: 3, date: new Date("2025-10-15"), time: "08:15:49", status: "hadir" },
    { attendance_id: 8, user_id: 4, date: new Date("2025-10-15"), time: "—", status: "izin" },
    { attendance_id: 9, user_id: 1, date: new Date("2025-10-16"), time: "08:03:41", status: "hadir" },
    { attendance_id: 10, user_id: 2, date: new Date("2025-10-16"), time: "—", status: "sakit" },
    { attendance_id: 11, user_id: 3, date: new Date("2025-10-16"), time: "—", status: "alpa" },
    { attendance_id: 12, user_id: 4, date: new Date("2025-10-16"), time: "08:05:09", status: "hadir" },
    { attendance_id: 13, user_id: 5, date: new Date("2025-10-17"), time: "08:06:22", status: "hadir" },
    { attendance_id: 14, user_id: 6, date: new Date("2025-10-17"), time: "08:10:10", status: "hadir" },
    { attendance_id: 15, user_id: 7, date: new Date("2025-10-17"), time: "—", status: "izin" },
    { attendance_id: 16, user_id: 8, date: new Date("2025-10-17"), time: "—", status: "sakit" },
    { attendance_id: 17, user_id: 9, date: new Date("2025-10-17"), time: "08:12:20", status: "hadir" },
    { attendance_id: 18, user_id: 10, date: new Date("2025-10-17"), time: "08:03:55", status: "hadir" },
    { attendance_id: 19, user_id: 1, date: new Date("2025-10-18"), time: "08:07:03", status: "hadir" },
    { attendance_id: 20, user_id: 2, date: new Date("2025-10-18"), time: "08:05:08", status: "hadir" },
    { attendance_id: 21, user_id: 3, date: new Date("2025-10-18"), time: "—", status: "sakit" },
    { attendance_id: 22, user_id: 4, date: new Date("2025-10-18"), time: "—", status: "alpa" },
    { attendance_id: 23, user_id: 5, date: new Date("2025-10-18"), time: "08:10:29", status: "hadir" },
    { attendance_id: 24, user_id: 6, date: new Date("2025-10-18"), time: "08:01:57", status: "hadir" },
    { attendance_id: 25, user_id: 7, date: new Date("2025-10-18"), time: "08:11:42", status: "hadir" },
    { attendance_id: 26, user_id: 8, date: new Date("2025-10-18"), time: "—", status: "izin" },
    { attendance_id: 27, user_id: 9, date: new Date("2025-10-18"), time: "—", status: "sakit" },
    { attendance_id: 28, user_id: 10, date: new Date("2025-10-18"), time: "08:04:15", status: "hadir" },
    { attendance_id: 29, user_id: 1, date: new Date("2025-10-19"), time: "08:08:21", status: "hadir" },
    { attendance_id: 30, user_id: 2, date: new Date("2025-10-19"), time: "08:09:33", status: "hadir" },
    { attendance_id: 31, user_id: 3, date: new Date("2025-10-19"), time: "—", status: "alpa" },
    { attendance_id: 32, user_id: 4, date: new Date("2025-10-19"), time: "—", status: "izin" },
    { attendance_id: 33, user_id: 5, date: new Date("2025-10-19"), time: "08:05:44", status: "hadir" },
    { attendance_id: 34, user_id: 6, date: new Date("2025-10-19"), time: "08:12:29", status: "hadir" },
    { attendance_id: 35, user_id: 7, date: new Date("2025-10-19"), time: "08:02:12", status: "hadir" },
    { attendance_id: 36, user_id: 8, date: new Date("2025-10-19"), time: "—", status: "sakit" },
    { attendance_id: 37, user_id: 9, date: new Date("2025-10-19"), time: "08:06:08", status: "hadir" },
    { attendance_id: 38, user_id: 10, date: new Date("2025-10-19"), time: "—", status: "alpa" },
    { attendance_id: 39, user_id: 1, date: new Date("2025-10-20"), time: "08:02:34", status: "hadir" },
    { attendance_id: 40, user_id: 2, date: new Date("2025-10-20"), time: "—", status: "sakit" },
    { attendance_id: 41, user_id: 3, date: new Date("2025-10-20"), time: "08:09:01", status: "hadir" },
    { attendance_id: 42, user_id: 4, date: new Date("2025-10-20"), time: "—", status: "izin" },
    { attendance_id: 43, user_id: 5, date: new Date("2025-10-20"), time: "08:11:22", status: "hadir" },
    { attendance_id: 44, user_id: 6, date: new Date("2025-10-20"), time: "08:04:18", status: "hadir" },
    { attendance_id: 45, user_id: 7, date: new Date("2025-10-20"), time: "—", status: "alpa" },
    { attendance_id: 46, user_id: 8, date: new Date("2025-10-20"), time: "08:07:23", status: "hadir" },
    { attendance_id: 47, user_id: 9, date: new Date("2025-10-20"), time: "08:03:12", status: "hadir" },
    { attendance_id: 48, user_id: 10, date: new Date("2025-10-20"), time: "—", status: "alpa" },
    { attendance_id: 49, user_id: 1, date: new Date("2025-10-21"), time: "08:01:45", status: "hadir" },
    { attendance_id: 50, user_id: 2, date: new Date("2025-10-21"), time: "08:05:30", status: "hadir" },
    { attendance_id: 51, user_id: 3, date: new Date("2025-10-21"), time: "—", status: "izin" },
    { attendance_id: 52, user_id: 4, date: new Date("2025-10-21"), time: "08:06:35", status: "hadir" },
    { attendance_id: 53, user_id: 5, date: new Date("2025-10-21"), time: "08:09:10", status: "hadir" },
    { attendance_id: 54, user_id: 6, date: new Date("2025-10-21"), time: "—", status: "sakit" },
    { attendance_id: 55, user_id: 7, date: new Date("2025-10-21"), time: "08:08:00", status: "hadir" },
    { attendance_id: 56, user_id: 8, date: new Date("2025-10-21"), time: "—", status: "alpa" },
    { attendance_id: 57, user_id: 9, date: new Date("2025-10-21"), time: "08:03:48", status: "hadir" },
    { attendance_id: 58, user_id: 10, date: new Date("2025-10-21"), time: "08:04:55", status: "hadir" },
    { attendance_id: 59, user_id: 1, date: new Date("2025-10-22"), time: "—", status: "izin" },
    { attendance_id: 60, user_id: 2, date: new Date("2025-10-22"), time: "08:10:20", status: "hadir" },
    { attendance_id: 61, user_id: 3, date: new Date("2025-10-22"), time: "08:11:17", status: "hadir" },
    { attendance_id: 62, user_id: 4, date: new Date("2025-10-22"), time: "—", status: "sakit" },
    { attendance_id: 63, user_id: 5, date: new Date("2025-10-22"), time: "08:05:44", status: "hadir" },
    { attendance_id: 64, user_id: 6, date: new Date("2025-10-22"), time: "08:06:35", status: "hadir" },
    { attendance_id: 65, user_id: 7, date: new Date("2025-10-22"), time: "—", status: "alpa" },
    { attendance_id: 66, user_id: 8, date: new Date("2025-10-22"), time: "08:07:13", status: "hadir" },
    { attendance_id: 67, user_id: 9, date: new Date("2025-10-22"), time: "08:04:44", status: "hadir" },
    { attendance_id: 68, user_id: 10, date: new Date("2025-10-22"), time: "—", status: "izin" },
    { attendance_id: 69, user_id: 1, date: new Date("2025-10-23"), time: "08:09:12", status: "hadir" },
    { attendance_id: 70, user_id: 2, date: new Date("2025-10-23"), time: "08:03:50", status: "hadir" },
    { attendance_id: 71, user_id: 3, date: new Date("2025-10-23"), time: "—", status: "sakit" },
    { attendance_id: 72, user_id: 4, date: new Date("2025-10-23"), time: "08:06:21", status: "hadir" },
    { attendance_id: 73, user_id: 5, date: new Date("2025-10-23"), time: "08:10:09", status: "hadir" },
    { attendance_id: 74, user_id: 6, date: new Date("2025-10-23"), time: "—", status: "alpa" },
    { attendance_id: 75, user_id: 7, date: new Date("2025-10-23"), time: "08:07:54", status: "hadir" },
    { attendance_id: 76, user_id: 8, date: new Date("2025-10-23"), time: "08:05:42", status: "hadir" },
    { attendance_id: 77, user_id: 9, date: new Date("2025-10-23"), time: "—", status: "izin" },
    { attendance_id: 78, user_id: 10, date: new Date("2025-10-23"), time: "08:02:13", status: "hadir" },
    { attendance_id: 79, user_id: 1, date: new Date("2025-10-24"), time: "—", status: "alpa" },
    { attendance_id: 80, user_id: 2, date: new Date("2025-10-24"), time: "08:04:21", status: "hadir" },
    { attendance_id: 81, user_id: 3, date: new Date("2025-10-24"), time: "08:11:18", status: "hadir" },
    { attendance_id: 82, user_id: 4, date: new Date("2025-10-24"), time: "08:07:09", status: "hadir" },
    { attendance_id: 83, user_id: 5, date: new Date("2025-10-24"), time: "—", status: "sakit" },
    { attendance_id: 84, user_id: 6, date: new Date("2025-10-24"), time: "08:03:14", status: "hadir" },
    { attendance_id: 85, user_id: 7, date: new Date("2025-10-24"), time: "08:10:55", status: "hadir" },
    { attendance_id: 86, user_id: 8, date: new Date("2025-10-24"), time: "08:00:43", status: "hadir" },
    { attendance_id: 87, user_id: 9, date: new Date("2025-10-24"), time: "—", status: "izin" },
    { attendance_id: 88, user_id: 10, date: new Date("2025-10-24"), time: "08:08:12", status: "hadir" },
    { attendance_id: 89, user_id: 1, date: new Date("2025-10-25"), time: "08:06:33", status: "hadir" },
    { attendance_id: 90, user_id: 2, date: new Date("2025-10-25"), time: "08:05:27", status: "hadir" },
    { attendance_id: 91, user_id: 3, date: new Date("2025-10-25"), time: "—", status: "alpa" },
    { attendance_id: 92, user_id: 4, date: new Date("2025-10-25"), time: "08:02:55", status: "hadir" },
    { attendance_id: 93, user_id: 5, date: new Date("2025-10-25"), time: "08:09:51", status: "hadir" },
    { attendance_id: 94, user_id: 6, date: new Date("2025-10-25"), time: "—", status: "izin" },
    { attendance_id: 95, user_id: 7, date: new Date("2025-10-25"), time: "—", status: "sakit" },
    { attendance_id: 96, user_id: 8, date: new Date("2025-10-25"), time: "08:07:38", status: "hadir" },
    { attendance_id: 97, user_id: 9, date: new Date("2025-10-25"), time: "08:11:03", status: "hadir" },
    { attendance_id: 98, user_id: 10, date: new Date("2025-10-25"), time: "—", status: "alpa" },
    { attendance_id: 99, user_id: 1, date: new Date("2025-10-26"), time: "08:02:59", status: "hadir" },
    { attendance_id: 100, user_id: 2, date: new Date("2025-10-26"), time: "08:04:11", status: "hadir" }
];

// Mengambil semua data attendance
function getAllAttendance(request, response) {
    return response.json({
        status: "success",
        message: "Attendances have been loaded",
        data: attendanceList,
    })
}

// Mencari data attendance berdasarkan user_id
function getAttendances(request, response) {
    // Semua request dari parameter tipe datanya String, jadi harus di ubah ke Number
    let userID = Number(request.params.id)
    // Disini dibuat array kosongan buat jaga jaga bila attendance yang sesuai dengan user_id banyak
    let attendances = []

    // Cek setiap attendance jika cocok dengan user_id
    attendanceList.forEach(a => {
        if (a.user_id === userID) {
            attendances.push(a)
        }
    })

    return response.json({
        status: "success",
        message: "Attendances have been loaded",
        data: attendances
    })
}

// Menambahkan attendance dengan data request dari body
function addAttendance(request, response) {
    let newData = {
        attendance_id: attendanceList.length + 1,
        user_id: Number(request.body.user_id),
        date: new Date(request.body.date),
        time: request.body.time,
        status: request.body.status
    }

    // Cek apakah data benar ada apa tidak
    if(newData) {
        attendanceList.push(newData)
    }

    return response.json({
        status: "success",
        message: "attendance have been added",
        data: newData
    })
}

// Buat lihat History presensi pengguna berdasarkan id
function getHistory(req, res) {
    let userID = Number(req.params.id)
    let history = attendanceList
        .filter(a => a.user_id === userID)
        .sort((a, b) => b.date - a.date) // urutkan terbaru ke lama

    return res.json({
        status: "success",
        message: "Attendance history loaded",
        data: history
    })
}

// Dapetin kesimpulan dari absensi satu user
function getSummary(request, response) {
    let userID = Number(request.params.id)
    let attendance_summary = {
        hadir: 0,
        izin: 0,
        sakit: 0,
        alpa: 0
    }

    attendanceList.forEach(a => {
        if (a.user_id === userID) {
            switch (a.status) {
                case "hadir":
                    attendance_summary.hadir++
                    break
                case "izin":
                    attendance_summary.izin++
                    break
                case "sakit":
                    attendance_summary.sakit++
                    break
                case "alpa":
                    attendance_summary.alpa++
                    break
            }
        }
    })

    return response.json({
        status: "success",
        message: "Summary has been generated",
        data: {
            user_id: userID,
            month: "10-2025",
            attendance_summary: attendance_summary
        }
    })
}

// Dapetin analysis, susah jelasinnya disini
function getAnalysis(request, response) {
    let filter = {
        start_date: new Date(request.body.start_date),
        end_date: new Date(request.body.end_date),
        group_by: request.body.group_by
    }

    let filteredData = []
    userList.forEach(u => {
        attendanceList.forEach(a => {
            if(u.id === a.user_id && (u.role).includes(filter.group_by)) {
                if(a.date >= filter.start_date && a.date <= filter.end_date) {
                    filteredData.push(a)
                }
            }
        })
    })

    let userIDs = []
    filteredData.forEach(a => {
        if(!(userIDs.includes(a.user_id))) {
            userIDs.push(a.user_id)
        }
    })

    let totalAttendance = {
        hadir: 0,
        izin: 0,
        sakit: 0,
        alpa: 0
    }
    filteredData.forEach(a => {
        Object.keys(totalAttendance).forEach(key => {
            if(a.status == key) {
                totalAttendance[key]++
            }
        })
    })

    let attendanceCount = filteredData.length
    let attendanceRate = {
        hadir_percentage: `${totalAttendance.hadir / attendanceCount * 100} Percent`,
        izin_percentage: `${totalAttendance.izin / attendanceCount * 100} Percent`,
        sakit_percentage: `${totalAttendance.sakit / attendanceCount * 100} Percent`,
        alpa_percentage: `${totalAttendance.alpa / attendanceCount * 100} Percent`
    }

    let groupedAnalysis = {
        group: filter.group_by,
        total_users: userIDs.length,
        attendance_rate: attendanceRate,
        total_attendance: totalAttendance
    }

    return response.json({
        status: "success",
        message: "Attendances have been analyzed",
        data: {
            analysis_period: {
                start_date: (filter.start_date).toISOString().slice(0, 10),
                end_date: (filter.end_date).toISOString().slice(0, 10)
            },
            grouped_analysis: groupedAnalysis
        }
    })
}

module.exports = { getAllAttendance, getAttendances, getSummary, getAnalysis, getHistory, addAttendance }