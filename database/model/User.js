import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    id: String,
    password: String,
    name: String,
    studentNumber: String,
    circles:String,
    posting: [Number]
});

UserSchema.methods.verifyPassword = (password1, password2) => {
    return password1 === password2;
}

UserSchema.methods.verfiyId = async (newId) => {
    const isUser= await User.exists({
        id:newId
    })
    console.log(user);
    return !isUser;
}
const User = mongoose.model('User', UserSchema);

export default User;