const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const SALT_ROUNDS = 6;

const userSchema = new Schema({
  name:{ type: String, required: true },
  email:{
    type: String,
    unique: true,
    lowercase: true,
    required: true,
    trim: true
  },
  password:{
    type: String,
    trim: true,
    required: true,
    minLength: 3
  }
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret){
      delete ret.password;
      return ret
    }
  }
});

userSchema.pre(
  'save',
  function(next){
    if(!this.isModified('password')) return next();

    this.password = bcrypt.hash(this.password, SALT_ROUNDS)
  }
)

module.exports = mongoose.model('User', userSchema);