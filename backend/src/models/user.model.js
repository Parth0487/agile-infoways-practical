const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    type: {
        type: Number
    },
    
},
    { timestamps: true }
);


module.exports = mongoose.model("users", UserSchema);
