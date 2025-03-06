import React, { useState } from "react";
import "./UserEdit.css";
const UserEdit = ({ user, onClose, onSave }) => {
  const [name, setName] = useState(user.name);
  const [status, setStatus] = useState(user.status === "Active");

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>User Editting</h2>

        {/* Edit namename */}
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Active/Inactive toggle */}
        <div className="input-group">
          <label>Status</label>
          <div className="toggle-container">
            <input
              type="checkbox"
              id="status-toggle"
              className="toggle-input"
              checked={status}
              onChange={() => setStatus(!status)}
            />
            <label htmlFor="status-toggle" className="toggle-label">
              <span className="toggle-button"></span>
            </label>
            <span className="toggle-text">
              {status ? "Active" : "Inactive"}
            </span>
          </div>
        </div>

        <div className="spacer"></div>

        {/* Save/Cancel buttton */}
        <div className="modal-buttons">
          <button
            className="btn-save"
            onClick={() =>
              onSave({ ...user, name, status: status ? "Active" : "Inactive" })
            }
          >
            Save
          </button>
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
