import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes placeholder
import authRoutes from "./routes/authRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import specialistRoutes from "./routes/specialistRoutes.js";

app.use("/api/auth", authRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/specialists", specialistRoutes);

// DB connect
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/appointments")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
