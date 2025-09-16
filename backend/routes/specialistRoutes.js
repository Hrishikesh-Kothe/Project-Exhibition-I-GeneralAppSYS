const express = require('express');
const jwt = require('jsonwebtoken');
const Specialist = require('../models/Specialist');
const Appointment = require('../models/Appointment');

const router = express.Router();

// Auth middleware
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Get specialist's appointments
router.get('/appointments', authMiddleware, async (req, res) => {
  try {
    const appointments = await Appointment.find({ specialistId: req.user.id }).sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add available slots
router.post('/slots', authMiddleware, async (req, res) => {
  try {
    const { slots } = req.body;
    
    const specialist = await Specialist.findById(req.user.id);
    if (!specialist) {
      return res.status(404).json({ message: 'Specialist not found' });
    }

    const newSlots = slots.map(slot => ({
      date: slot.date,
      time: slot.time,
      isBooked: false
    }));

    specialist.availableSlots.push(...newSlots);
    await specialist.save();

    res.json({ message: 'Slots added successfully', slots: specialist.availableSlots });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get specialist's slots
router.get('/slots', authMiddleware, async (req, res) => {
  try {
    const specialist = await Specialist.findById(req.user.id);
    if (!specialist) {
      return res.status(404).json({ message: 'Specialist not found' });
    }

    res.json(specialist.availableSlots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update profile
router.put('/profile', authMiddleware, async (req, res) => {
  try {
    const { name, description, experience, phone } = req.body;
    
    const specialist = await Specialist.findByIdAndUpdate(
      req.user.id,
      { name, description, experience, phone },
      { new: true }
    ).select('-password');

    res.json({ message: 'Profile updated successfully', specialist });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;