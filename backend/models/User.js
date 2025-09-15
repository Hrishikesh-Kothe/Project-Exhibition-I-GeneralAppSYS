const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },           // add name for all users
  username: { type: String },                        // optional, primarily for specialists
  email: { type: String, required: true, unique: true },
  number: { type: String },                          // optional phone number
  category: {                                        // specialist-specific category
    type: String,
    enum: ['healthcare', 'home service', 'education', 'personal care'],
    required: function() { return this.role === 'specialist'; }
  },
  password: { type: String, required: true },
  role: { type: String, enum: ['member', 'specialist'], required: true }
});

module.exports = mongoose.model('User', UserSchema);

