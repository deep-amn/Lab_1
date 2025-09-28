import React, { useState } from "react";
import roles from "../../data/organization.json"; 
import type { Role } from "../../types";
import "./Organization.css";

const Organization: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="organization">
      <h2>Leadership & Management</h2>
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
