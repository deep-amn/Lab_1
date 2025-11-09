export interface Employee {
  id: number;
  name: string;
  department: string;
}

export const employees: Employee[] = [
  { id: 1, name: "Zoë Robins", department: "Administration" },
  { id: 2, name: "Madeleine Madden", department: "Administration" },
  { id: 3, name: "Josha Sadowski", department: "Audit" },
];
