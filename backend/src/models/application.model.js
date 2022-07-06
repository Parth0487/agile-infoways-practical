const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        trim: true
    },
    address: {
        type: String
    },
    gender: {
        type: String,
        trim: true
    },

    contact: {
        type: String
    },

    education: {
        type: Object
    },

    workExperience: {
        type: Object
    },

    knownLanguages: {
        type: Object
    },

    technicalExperience: {
        type: Object
    },

    preference: {
        type: Object
    },
},
    { timestamps: true }
);


module.exports = mongoose.model("Applications", ApplicationSchema);
