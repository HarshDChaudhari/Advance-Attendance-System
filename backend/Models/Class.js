const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClassSchema = new Schema({
    branch: {
        type: Number,
        required: true
    },
    college: {
        type: Number,
        required: true
    },
    totalStudent: {
        type: Number,
        default: 0
    },
    cc: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    student: {
        type: [mongoose.Schema.Types.ObjectId],
        default: []
    },
    attendance: {
        type: {Date: [String]},
        default: {}
    }
});

const Class = mongoose.model("class", ClassSchema);
module.exports = Class;