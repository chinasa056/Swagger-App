const mongoose = require("mongoose")
const DB = process.env.MONGODB_URI

mongoose.connect(DB)
.then(()=> {
    console.log('connectionto database successful');
    
})
.catch((error) => {
    console.log("error connectiong to database" + error.message);
    
})