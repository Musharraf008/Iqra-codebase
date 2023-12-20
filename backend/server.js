const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Students = require("./model/schema");

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection

const atlasConnectionUri =
  "mongodb+srv://musharrafjamal92:mongodbpassword@cluster0.askosbz.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(atlasConnectionUri);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

app.use(cors());
app.use(express.json());

// Middleware to parse request bodies as JSON
app.use(bodyParser.json());


app.get("/students", async (req, res) => {
  try {
    // Fetch messages from MongoDB
    const students = await Students.find();
    res.json(students);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/admission-form", async (req, res) => {
  try {
    const newStudent = new Students({
      name: req.body.name,
      fname: req.body.fname,
      class: req.body.class,
      gender: req.body.gender,
      mobile: req.body.mobile,
      email: req.body.email,
      date: req.body.date,
      time: req.body.time
    });

    // Save the new student to the database
    const savedStudent = await newStudent.save();

    // Send a success response
    res.json({ message: "Student saved successfully", student: savedStudent });
  } catch (err) {
    // Handle errors and send an error response
    console.error(err);
    res.status(500).json({ error: "Error saving student to the database" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
