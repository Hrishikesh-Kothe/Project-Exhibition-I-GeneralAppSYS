const mongoose = require('mongoose');

const AvailabilitySchema = new mongoose.Schema({
  specialistId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  availableSlots: [
    {
      date: { type: String, required: true },
      time: { type: String, required: true }
    }
  ]
});

module.exports = mongoose.model('Availability', AvailabilitySchema);

