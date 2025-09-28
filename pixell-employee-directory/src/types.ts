export interface Employee {
  name: string;
  department: string;
}

export interface Role {
  role: string;
  name: string;
  description?: string; // optional because some roles dont have desciption
}