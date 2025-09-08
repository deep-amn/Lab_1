import React, { useEffect, useState } from 'react';
import type { Employee } from '../../src/types';
import employeesData from '../employees.json';

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    setEmployees(employeesData);
  }, []);

  // Group employees by department
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
      {departments.map(([dept, names]) => (
        <div key={dept}>
          <h4>{dept}</h4>
          <ul>
            {names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default EmployeeList;
