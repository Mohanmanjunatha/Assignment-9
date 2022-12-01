const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const url = 'mongodb://localhost:27017/user';

let connection = {};

let schema = {
    "name": {
        type: String,
        required: true,
    },
    "emailId": {
        type: String,
        required: true,
        unique: true
    },
    "password": {
        type: String,
        required: true
    }
}

const userSchema = new Schema(schema, { collection: "User", timestamps: true });

connection.getUserCollection = async () => {
    try {
        return (await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })).model("User", userSchema);
    } catch (err) {
        let error = new Error("Could not connect to database");
        error.status = 500;
        throw error;
    }
}

module.exports = connection;