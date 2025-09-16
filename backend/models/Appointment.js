const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: true
  },
  specialistId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Specialist',
    required: true
  },
  memberName: {
    type: String,
    required: true
  },
  specialistName: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['booked', 'completed', 'cancelled'],
    default: 'booked'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Appointment', appointmentSchema);