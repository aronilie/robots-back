import "./loadEnvironment";
import { connectDB, startServer } from "./server/startServer";

const port = process.env.PORT ?? 3500;

const mongoUrl = process.env.MONGODB;

(async () => {
  try {
    await connectDB(mongoUrl);
    startServer(+port);
  } catch (error) {
    process.exit(1);
  }
})();
