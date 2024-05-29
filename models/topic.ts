import mongoose, { Schema } from "mongoose";
const TopicSchema = new Schema(
    {
        title:String,
        description:String
    },
    {
        timestamps:true,
        versionKey: '_somethingElse'
    }
)
const Topic = mongoose.models.Topic || mongoose.model("Topic",TopicSchema)

export default Topic

