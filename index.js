import express from "express";
import colors from "colors";
import screamRouter from "./routes/screams.js";
import userRouter from "./routes/user.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/api/v1/screams", screamRouter);
app.use("/api/v1/user", userRouter);

try {
  app.listen(PORT);
  console.log(`Listening to PORT ${PORT}`.blue.bold);
} catch (err) {
  console.log(`${err}`.red.bold);
}
