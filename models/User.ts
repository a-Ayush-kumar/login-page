import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  image: String,
  description: String,
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
