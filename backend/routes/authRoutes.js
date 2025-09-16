const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Member = require('../models/Member');
const Specialist = require('../models/Specialist');

const router = express.Router();

// Member register
router.post('/member/register', async (req, res) => {
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

// Member login
router.post('/member/login', async (req, res) => {
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

// Specialist register
router.post('/specialist/register', async (req, res) => {
  try {
    const { name, email, password, phone, specialty, description, experience } = req.body;
    
    const existingSpecialist = await Specialist.findOne({ email });
    if (existingSpecialist) {
      return res.status(400).json({ message: 'Specialist already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const specialist = new Specialist({
      name,
      email,
      password: hashedPassword,
      phone,
      specialty,
      description,
      experience
    });

    await specialist.save();
    res.status(201).json({ message: 'Specialist registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Specialist login
router.post('/specialist/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const specialist = await Specialist.findOne({ email });
    if (!specialist) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, specialist.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: specialist._id, type: 'specialist' },
      'your-secret-key',
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        id: specialist._id,
        name: specialist.name,
        email: specialist.email,
        specialty: specialist.specialty,
        type: 'specialist'
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;