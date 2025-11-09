import { employees, Employee } from "../data/employees";

export const getAllEmployees = (): Employee[] => {
  return employees;
};

export const getEmployeeById = (id: number): Employee | undefined => {
  return employees.find(emp => emp.id === id);
};
