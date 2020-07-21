import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    id: String,
    password: String,
    name: String,
    studentNumber: Number,
    posting: [Number]
});

UserSchema.methods.verifyPassword = (password1, password2) => {
    return password1 === password2;
}

const User = mongoose.model('User', UserSchema);

export default User;