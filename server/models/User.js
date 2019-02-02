// Mongoose Model Class
const mongoose = require('mongoose');
//Destructuring ES2015 and pulling property from Mongoose Object
const { Schema } = mongoose;

// Constructor Call / Create new Object
const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);
