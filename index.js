import express from "express";
import colors from "colors";

const app = express();
const PORT = 5000;

app.listen(PORT, console.log(`listening to port ${PORT}`.blue.bold));
