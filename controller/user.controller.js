// Data Dummy User
let userList = [
    {
        id: 1,
        name: "Raka",
        username: "bestie",
        password: "12345",
        role: "admin"
    },
    {
        id: 2,
        name: "lala",
        username: "aurel",
        password: "12345",
        role: "admin"
    },
    {
        id: 3,
        name: "dema",
        username: "hizoka",
        password: "12345",
        role: "user"
    },
    {
        id: 4,
        name: "aloy",
        username: "pintar",
        password: "12345",
        role: "siswa"
    },
    {
        id: 5,
        name: "gigaa",
        username: "someone",
        password: "12345",
        role: "siswa"
    },
    {
        id: 6,
        name: "dava",
        username: "jahat",
        password: "12345",
        role: "siswa"
    },
    {
        id: 7,
        name: "selo",
        username: "haters",
        password: "12345",
        role: "siswa"
    },
    {
        id: 8,
        name: "narendra",
        username: "nala",
        password: "12345",
        role: "siswa"
    },
    {
        id: 9,
        name: "meilan",
        username: "eonnie",
        password: "12345",
        role: "siswa"
    },
    {
        id: 10,
        name: "levy",
        username: "teman",
        password: "12345",
        role: "siswa"
    }
];

// Nampilin semua user
function getAllUser(request, response) {
    return response.json({
        success: true,
        message: "All User have been loaded",
        data: userList
    })
}

// Cari user berdasarkan ID di parameter 
function getUser(request, response) {
    // Semua request dari parameter tipe datanya String, jadi harus di ubah ke Number
    let userID = Number(request.params.id) 
    // method array.find() berfungsi hanya untuk mencari satu data yang cocok dengan kondisi
    let userData = userList.find(u => u.id === userID);

    return response.json({
        success: true,
        message: "User has been loaded",
        data: userData
    })
}

// Menambahkan user menggunakan data yang direquest di body
function addUser(request, response) {
    let newData = {
        id: userList.length + 1, // Bagian ID tidak perlu di tulis di body
        name: request.body.name,
        username: request.body.username,
        password: request.body.password,
        role: request.body.role,
    }
    // Memasukkan data baru ke array user
    userList.push(newData)

    return response.json({
        status: "success",
        message: "User has been added",
        data: newData
    })
}

// Mengupdate data user menggunakan data yang direquest di body
function updateUser(request, response) {
    // Semua request dari parameter tipe datanya String, jadi harus di ubah ke Number
    let userID = Number(request.params.id)
    let newData = {
        id: userID, // Bagian ID tidak perlu di tulis di body
        name: request.body.name,
        username: request.body.username,
        password: request.body.password,
        role: request.body.role,
    }
    // Mehtod Object.assign() berfungsi untuk menimpa data lama dengan data baru
    Object.assign(userList[userID - 1], newData)

    return response.json({
        status: "success",
        message: "User has been updated",
        data: userList[userID - 1]
    })
}

// Mengexport semua function dan variabel yang dibutuhkan untuk file lain
module.exports = { userList, getAllUser, getUser, addUser, updateUser }