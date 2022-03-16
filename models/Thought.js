const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    _id : {
      type: Schema.Types.ObjectId,
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: true,
  }
);

const thoughtSchema = new Schema(
  {
    _id : {
      type: Schema.Types.ObjectId,
    },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true,
    },
    id: true,
  }
);

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought
