const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Member = require('../models/Member');
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

// Register member (for your existing frontend)
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    
    const existingMember = await Member.findOne({ email });
    if (existingMember) {
      return res.status(400).json({ message: 'Member already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const member = new Member({
      name,
      email,
      password: hashedPassword,
      phone
    });

    await member.save();
    res.status(201).json({ message: 'Member registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login member (for your existing frontend)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const member = await Member.findOne({ email });
    if (!member) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, member.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: member._id, type: 'member' },
      'your-secret-key',
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        id: member._id,
        name: member.name,
        email: member.email,
        type: 'member'
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get specialists by category
router.get('/specialists/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const specialists = await Specialist.find({ specialty: category }).select('-password');
    res.json(specialists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get specialist details
router.get('/specialist/:id', async (req, res) => {
  try {
    const specialist = await Specialist.findById(req.params.id).select('-password');
    if (!specialist) {
      return res.status(404).json({ message: 'Specialist not found' });
    }
    res.json(specialist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Book appointment
router.post('/book-appointment', authMiddleware, async (req, res) => {
  try {
    const { specialistId, date, time } = req.body;
    
    const member = await Member.findById(req.user.id);
    const specialist = await Specialist.findById(specialistId);
    
    if (!member || !specialist) {
      return res.status(404).json({ message: 'Member or Specialist not found' });
    }

    // Check if slot is available
    const slotIndex = specialist.availableSlots.findIndex(
      slot => slot.date === date && slot.time === time && !slot.isBooked
    );
    
    if (slotIndex === -1) {
      return res.status(400).json({ message: 'Slot not available' });
    }

    // Mark slot as booked
    specialist.availableSlots[slotIndex].isBooked = true;
    await specialist.save();

    // Create appointment
    const appointment = new Appointment({
      memberId: member._id,
      specialistId: specialist._id,
      memberName: member.name,
      specialistName: specialist.name,
      specialty: specialist.specialty,
      date,
      time
    });

    await appointment.save();

    res.json({
      message: `Appointment booked with Dr. ${specialist.name} for ${date} at ${time}`,
      appointment
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get member's appointments
router.get('/appointments', authMiddleware, async (req, res) => {
  try {
    const appointments = await Appointment.find({ memberId: req.user.id }).sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;