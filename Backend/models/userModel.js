const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    admin:{
        type:Boolean,
        default:false
    },
    manager:{
        type:Boolean,
        default:false
    },
},
    {
        timestamps: true,
    }
);

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
