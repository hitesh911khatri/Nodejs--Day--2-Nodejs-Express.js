const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connect = require("./connect");
const authRouter = require("./routes/auth");
const roomRouter = require("./routes/room");
const usersRouter = require("./routes/users");
const hallRouter = require("./routes/hall");
const CookieParser = require("cookie-parser");

dotenv.config();
connect();

const app = express();

app.use(CookieParser());

PORT = process.env.PORT;
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/hall", hallRouter);
app.use("/api/rooms", roomRouter);

//middlewares

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.status || "something went wrong,god knows why";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
