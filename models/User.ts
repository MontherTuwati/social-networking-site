import { Document, Schema, model, models } from 'mongoose';

interface IUser extends Document {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    profilePicture?: string;
    createdAt?: Date;
}

const userSchema = new Schema<IUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    profilePicture: { type: String },
    createdAt: { type: Date, default: Date.now },

});

const User = models.User || model<IUser>('User', userSchema);
export default User;