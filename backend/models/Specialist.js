const mongoose = require('mongoose');

const specialistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  specialty: {
    type: String,
    required: true,
    enum: ['Health Care', 'Personal Care', 'Education', 'Home Service']
  },
  description: {
    type: String
  },
  experience: {
    type: String
  },
  availableSlots: [{
    date: String,
    time: String,
    isBooked: {
      type: Boolean,
      default: false
    }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Specialist', specialistSchema);