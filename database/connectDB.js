const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(
        console.log("Database is connected")
    ).catch((error)=>{
        console.log(error.message);
    })
}

module.exports = connectDB