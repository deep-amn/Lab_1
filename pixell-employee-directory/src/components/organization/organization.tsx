import React, { useState } from "react";
import roles from "../../data/organization.json";
import type { Role } from "../../types";
import "./Organization.css";
import { useEntryForm } from "../hooks/useEntryForm";

const Organization: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const { name, setName, role, setRole, error, handleSubmit } = useEntryForm();

  return (
    <div className="organization">
      <h2>Leadership & Management</h2>

      <form onSubmit={handleSubmit} className="add-role-form">
        <h3>Add New Role</h3>

        <div className="form-group">
          <label htmlFor="role">Role Title:</label>
          <input
            id="role"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Enter role title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Assigned To:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter employee name"
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Add Role</button>
      </form>

      <ul>
        {roles.map((roleItem: Role) => (
          <li key={roleItem.role}>
            <button
              onClick={() =>
                setExpanded(expanded === roleItem.role ? null : roleItem.role)
              }
            >
              {roleItem.role} - {roleItem.name}
            </button>
            {expanded === roleItem.role && roleItem.description && (
              <p>{roleItem.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Organization;
