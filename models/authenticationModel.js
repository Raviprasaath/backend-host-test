

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        name: {
            type: String,
            require: [true, "Please add the name"],
        },
        email: {
            type: String,
            require: [true, "Please add the email"],
        },
        phone: {
            type: Number,
            require: [true, "Please add the phone number"],
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model("UserInfo", userSchema);

