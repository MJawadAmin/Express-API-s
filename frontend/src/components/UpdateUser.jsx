import React, { useState } from "react";
import axios from "axios";

const UpdateUser = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:3000/updateUser", {
        id,
        name,
        email,
        age,
      });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleUpdate}>
        {/* <input
          type="text"
          placeholder="User ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        /> */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
