import { Document, Schema, model, models } from 'mongoose';

interface IUser extends Document {
    firstName: String;
    lastName: String;
    username: String;
    bio: String;
    email: String;
    emailVerified: Date;
    password: String;
    profilePicture?: String;
    coverImage?: String;
    createdAt?: Date;
    updatedAt?: Date;
    hasNotification: Boolean;
}

const userSchema = new Schema<IUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    profilePicture: { type: String },
    coverImage: { type: String },
    bio: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    hasNotification: { type: Boolean },

});

const User = models.User || model<IUser>('User', userSchema);
export default User;