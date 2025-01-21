import React, { useState } from "react";
import axios from "axios";

const DeleteUser = () => {
  const [id, setId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete("http://localhost:3000/deleteUser", {
        data: { id },
      });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <form onSubmit={handleDelete}>
        <input
          type="text"
          placeholder="User ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteUser;
