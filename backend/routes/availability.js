const express = require('express');
const router = express.Router();
const Availability = require('../models/Availability');

// POST availability for specialist
router.post('/specialist/availability', async (req, res) => {
  const { specialistId, availableSlots } = req.body;

  if (!specialistId || !availableSlots) {
    return res.status(400).json({ error: 'specialistId and availableSlots are required' });
  }

  try {
    // Check if availability exists for specialist
    let availability = await Availability.findOne({ specialistId });

    if (availability) {
      // Update existing available slots
      availability.availableSlots = availableSlots;
    } else {
      // Create new availability document
      availability = new Availability({ specialistId, availableSlots });
    }

    await availability.save();
    res.json({ message: 'Availability updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET availability of specialist by id
router.get('/specialist/:id/availability', async (req, res) => {
  const specialistId = req.params.id;

  try {
    const availability = await Availability.findOne({ specialistId });
    if (!availability) return res.status(404).json({ error: 'No availability found' });

    res.json(availability.availableSlots);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

