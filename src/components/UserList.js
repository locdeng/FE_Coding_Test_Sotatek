import React, { useState, useEffect } from "react";
import UserEdit from "./UserEdit";
import "./UserList.css";

const UserList = () => {
  // State for user data
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // State for search input
  const [search, setSearch] = useState("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  // Loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for editing a user
  const [editingUser, setEditingUser] = useState(null);

  // Fetch user data from API on component mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load user data!");
        setLoading(false);
      });
  }, []);

  // Update the filtered list based on search input
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilteredUsers(
        users.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase())
        )
      );
      setCurrentPage(1);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search, users]);

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Handle edit button click
  const handleEdit = (user) => {
    setEditingUser(user);
  };

  // Handle saving updated user data
  const handleSave = (updatedUser) => {
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    setEditingUser(null);
  };

  return (
    <div className="user-list">
      <h2>User Management</h2>

      {/* Search input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Display loading or error message */}
      {loading && <p>Loading data...</p>}
      {error && <p className="error">{error}</p>}

      {/* Display user list */}
      <div className="users-container">
        {currentUsers.map((user) => (
          <div key={user.id} className="user-item">
            {/* User avatar */}
            <img
              src={`https://i.pravatar.cc/50?img=${user.id}`}
              alt="avatar"
              className="user-avatar"
            />

            {/* User information */}
            <div className="user-info">
              <p className="user-name">{user.name}</p>
              <p className="user-email">{user.email}</p>
            </div>

            {/* Edit button */}
            <button className="edit-btn" onClick={() => handleEdit(user)}>
              Edit
            </button>
          </div>
        ))}
      </div>

      <div className="spacer"></div>

      {/* Pagination controls */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={indexOfLastUser >= filteredUsers.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>

      {/* Display user edit modal if a user is being edited */}
      {editingUser && (
        <UserEdit
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default UserList;
