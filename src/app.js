import express from "express";
import cors from 'cors';

import db from "./config/db.js";
import indexRouter from "./routes/index.route.js";

const app = express();

app.set("port", process.env.PORT || 3000);

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/", indexRouter);
app.use("*", (req, res) => {
  res.send("404 - not found");
});


// start server
app.listen(app.get("port"), () => {
  console.log("Server is running on port", app.get("port"));
});

// connect to database
db.connect()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
