import mongoose from 'mongoose';

const PasswordResetSchema = new mongoose.Schema({
    email: { type: String, required: true },
    token: { type: String, required: true },
    expiresAt: { type: Date, required: true },
});

export const PasswordReset =
    mongoose.models.PasswordReset || mongoose.model('PasswordReset', PasswordResetSchema);
