const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API Running' });
});

const PORT = process.env.PORT || 6000;
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);
const availabilityRoutes = require('./routes/availability');
app.use('/api', availabilityRoutes);
const appointmentRoutes = require('./routes/appointments');
app.use('/api', appointmentRoutes);



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

