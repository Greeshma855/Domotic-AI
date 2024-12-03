// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

// const userSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: [true, 'Email is required'],
//         unique: true,
//         match: [/.+\@.+\..+/, 'Please enter a valid email address']
//     },
//     password: {
//         type: String,
//         required: [true, 'Password is required'],
//         minlength: [6, 'Password must be at least 6 characters long']
//     },
//     confirmPassword: {
//         type: String,
//         required: [true, 'Please confirm your password'],
//         validate: {
//             validator: function(value) {
//                 return value === this.password;
//             },
//             message: 'Passwords do not match'
//         }
//     }
// });

// userSchema.pre('save', async function(next) {
//     if(!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password, 12);
//     this.confirmPassword = undefined;
//     next();
// });

// userSchema.methods.matchPassword = async function(enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };

// export default mongoose.model('User', userSchema);


import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        minlength: [6, 'Password must be at least 6 characters long']
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true // allows multiple documents with null googleId
    },
    name: {
        type: String
    },
    picture: {
        type: String
    }
});

// Hash password before saving, if it's provided
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    if (this.password) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

// Method to match passwords
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('User', userSchema);
