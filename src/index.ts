import express from "express";
import robotsRouter from "./routes/RobotsRoutes";
import { connectDB, startServer } from "./server/startServer";

const app = express();
const port = process.env.PORT ?? 3500;
const mongoUrl = "Atlas string";
app.use(express.json());

(async () => {
  try {
    await connectDB(mongoUrl);
    await startServer(+port);
  } catch {
    process.exit(1);
  }
})();

app.use("/robots", robotsRouter);
