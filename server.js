// Used to connect the database to the application
const express = require("express");
// Creating an instance of express
const app = express();
// Bringing in connectDB from the config file
const connectDB = require("./config/db");
const path = require("path");

// Connect to the database
connectDB();

// Initialise the middleware
app.use(express.json({ extended: false }));

//Defining routes for the website
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/mentorprofile", require("./routes/api/mentorprofile"));
app.use("/api/businessprofile", require("./routes/api/businessprofile"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_direname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
