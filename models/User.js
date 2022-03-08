const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
  {
    _id : {
      type: Schema.Types.ObjectId
    },
    username: {
      type: String,
      required: 'Username is required',
      unique: true,
      trim: true,
      max_length: 32,
    },
    email: {
      type: String,
      unique: true,
      required: 'Email is required',
      trim: true,
      lowercase: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
      max_length: 50,
    },
    thoughts: [thoughtSchema],
    friends: [this],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: true,
  }
);

userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;
