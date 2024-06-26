const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
const { json } = require("express");

const app = express();
app.use(cors());

const port = 5500;

app.use(json());

app.use("/api/auth/student/", require("./routes/student"));
app.use("/api/auth/teacher/", require("./routes/teacher"));

app.get("/", (req, res) => {
    res.send("Hello Dobuuu❤");
});

app.listen(port, () => {
    console.log(`expenseTrackerApp - Backend Listening on port ${port}`);
});

connectToMongo();
