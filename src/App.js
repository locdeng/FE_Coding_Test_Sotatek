import React from "react";
import UserList from "./components/UserList";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1>User Managament Dashboard</h1>
      <UserList />
    </div>
  );
}
