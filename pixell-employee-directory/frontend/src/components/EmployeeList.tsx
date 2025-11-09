import React, { useEffect, useState } from "react";
import type { Employee } from "../../src/types";
import employeesData from "../data/employees.json";
import { useEntryForm } from "../../src/components/hooks/useEntryForm";

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    setEmployees(employeesData);
  }, []);

  const { name, setName, role, setRole, error, handleSubmit } = useEntryForm();

  const departments = Array.from(
    employees.reduce((map, emp) => {
      if (!map.has(emp.department)) map.set(emp.department, []);
      map.get(emp.department)!.push(emp.name);
      return map;
    }, new Map<string, string[]>())
  );

  return (
    <section id="employee-list">
      <h2>Employee Directory</h2>

      <form onSubmit={handleSubmit} className="add-employee-form">
        <h3>Add New Employee</h3>

        <div className="form-group">
          <label htmlFor="employeeName">Employee Name:</label>
          <input
            id="employeeName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter employee name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="employeeRole">Department / Role:</label>
          <input
            id="employeeRole"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Enter department or role"
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Add Employee</button>
      </form>

      {departments.map(([dept, names]) => (
        <div key={dept} className="department-block">
          <h4>{dept}</h4>
          <ul>
            {names.map((empName) => (
              <li key={empName}>{empName}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default EmployeeList;
