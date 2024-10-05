import mongoose, { Document, Schema } from "mongoose";

export interface IPost extends Document {
    userId: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

const PostSchema: Schema = new Schema({
    userId: {type: String, require: true},
    content: {type: String, require: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

const Post = mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);
export default Post;