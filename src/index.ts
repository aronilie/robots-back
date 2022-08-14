import "./loadEnvironment";
import cors from "cors";
import morgan from "morgan";
import { connectDB, startServer, app } from "./server/startServer";
import robotsRouter from "./server/routers/robotsRoutes";
import notFoundError from "./server/middlewares/errors";

const port = process.env.PORT ?? 3500;

const mongoUrl = process.env.MONGODB;

app.use(morgan("dev"));

app.use(
  cors({
    origin: "http://localhost:3000/",
    methods: "GET",
  })
);

app.use("/robots", robotsRouter);
app.use(notFoundError);

(async () => {
  try {
    await connectDB(mongoUrl);
    await startServer(+port);
  } catch (error) {
    process.exit(1);
  }
})();
