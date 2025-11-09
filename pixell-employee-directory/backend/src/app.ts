import express from "express";
import cors from "cors";
import employeeRoutes from "../src/routes/exployeeRoutes";

const app = express();

app.use(express.json());

const allowedOrigin = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(cors({ origin: allowedOrigin }));

app.use("/api/employees", employeeRoutes);


app.get("/", (_req, res) => {
  res.send("Pixell River Financial Backend is running!");
});

export default app;
