
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const authRoute = require("./routers/auth-router");
const contactRoute = require("./routers/contact-router");
const serviceRoute = require("./routers/service-router");
const adminRoute = require("./routers/admin-router");

const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// ==============================
// CORS CONFIGURATION
// ==============================

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://lms-platform-apii.onrender.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
  credentials: true
};

app.use(cors(corsOptions));

// ==============================
// MIDDLEWARE
// ==============================

app.use(express.json());

// ==============================
// ROUTES
// ==============================

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);

// ==============================
// ERROR MIDDLEWARE
// ==============================

app.use(errorMiddleware);

// ==============================
// DATABASE
// ==============================

connectDb();

// ==============================
// SERVER
// ==============================

app.listen(5000, () => {
  console.log("Port is 5000");
});

