const express = require("express");
const databaseConnection = require("./configs/databaseConnection");
const podcastRouter = require("./routes/podcastRouter");
const channelRouter = require("./routes/channelRouter");
const categoryRouter = require("./routes/categoryRouter");

require("dotenv").config();

const app = express();
databaseConnection.connectDatabase();

app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server Started at ${3000}`);
});

app.use("/api", channelRouter);
app.use("/api", podcastRouter);
app.use("/api", categoryRouter);


app.get("/", (req, res, next) => {
  res.status(200).json({ success: "Test Server" });
});
