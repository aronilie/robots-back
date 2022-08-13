import morgan from "morgan";
import "./loadEnvironment";
import { connectDB, startServer, app } from "./server/startServer";
import robotsRouter from "./server/routers/RobotsRoutes";

const port = process.env.PORT ?? 3500;

const mongoUrl = process.env.MONGODB as string;

app.use(morgan("dev"));

app.use("/robots", robotsRouter);

(async () => {
  try {
    await connectDB(mongoUrl);
    await startServer(+port);
  } catch (error) {
    process.exit(1);
  }
})();
