import express from "express";
import * as employeeController from "../controllers/employeeController";

const router = express.Router();

// GET /api/employees
router.get("/", employeeController.getEmployees);

// GET /api/employees/:id
router.get("/:id", employeeController.getEmployee);

export default router;
