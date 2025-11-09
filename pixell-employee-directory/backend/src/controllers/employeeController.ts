import { Request, Response } from "express";
import * as employeeService from "../services/employeeService";

export const getEmployees = (_req: Request, res: Response) => {
  const allEmployees = employeeService.getAllEmployees();
  res.json(allEmployees);
};

export const getEmployee = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const employee = employeeService.getEmployeeById(id);

  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }

  res.json(employee);
};
