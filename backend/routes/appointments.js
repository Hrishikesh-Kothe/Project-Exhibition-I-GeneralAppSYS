const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const Availability = require('../models/Availability');

// Book an appointment
router.post('/appointments', async (req, res) => {
  const { memberId, specialistId, date, time } = req.body;

  if (!memberId || !specialistId || !date || !time) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Check availability for this slot
    const availability = await Availability.findOne({ specialistId });
    if (!availability) return res.status(400).json({ error: 'No availability found for specialist' });

    const slotIndex = availability.availableSlots.findIndex(slot => slot.date === date && slot.time === time);
    if (slotIndex === -1) {
      return res.status(400).json({ error: 'Requested slot not available' });
    }

    // Create appointment
    const appointment = new Appointment({ memberId, specialistId, date, time });
    await appointment.save();

    // Remove booked slot from availability
    availability.availableSlots.splice(slotIndex, 1);
    await availability.save();

    res.json({ message: 'Appointment booked successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get appointments for a member
router.get('/appointments/member/:memberId', async (req, res) => {
  const memberId = req.params.memberId;

  try {
    const appointments = await Appointment.find({ memberId });
    res.json(appointments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get appointments for a specialist
router.get('/appointments/specialist/:specialistId', async (req, res) => {
  const specialistId = req.params.specialistId;

  try {
    const appointments = await Appointment.find({ specialistId });
    res.json(appointments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

