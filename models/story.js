const mongoose = require("mongoose")

const storySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "story Title is required"]
    },
    description: {
        type: String,
        required: [true, "story Description is required"]
    },
    tag: {
        type: String,
        enum: ["nature", "lifestyle", "sport", "technology", "others"],
        required: [true, "Story tag is required"]
    },
    image: {
        type: String,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: [true, "Please provide user"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("Story", storySchema);