import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import adminRouter from "./src/routes/adminRoutes";
import gestorRouter from "./src/routes/authRoutes";
import bookingRouter from "./src/routes/bookingRoutes";
import patientRouter from "./src/routes/patientsRoutes";
const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRouter);
app.use("/auth", gestorRouter);
app.use("/booking", bookingRouter);
app.use("/patient", patientRouter);
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Il server è attivo");
});
app.listen(process.env.port);
