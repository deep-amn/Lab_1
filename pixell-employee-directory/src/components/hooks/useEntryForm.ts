import { useState } from "react";
import { validStaffService } from "../services/validStaffService";

export function useEntryForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameCheck = validStaffService.validateEmployee(name);
    if (!nameCheck.valid) {
      setError(nameCheck.error);
      return;
    }

    const roleCheck = validStaffService.validateRole(role);
    if (!roleCheck.valid) {
      setError(roleCheck.error);
      return;
    }

    setError("");
    console.log("New Employee/Role added:", { name, role });

    setName("");
    setRole("");
  };

  return {
    name,
    setName,
    role,
    setRole,
    error,
    handleSubmit,
  };
}
