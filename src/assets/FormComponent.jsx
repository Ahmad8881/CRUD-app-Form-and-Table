import React, { useState } from "react";

const FormComponent = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && age) {
      onAdd({ name, email, age });
      setName("");
      setEmail("");
      setAge("");
    }
  };

  return (
    <div style={style.div}>
      <h2 style={{ textAlign: "center", marginBottom: "16px" }}>Add New Entry</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "8px", border: "1px solid black" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px", border: "1px solid black" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{ width: "100%", padding: "8px", border: "1px solid black" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Entry
        </button>
      </form>
    </div>
  );
};
const style = {
  div: {
    padding: "16px",
    border: "1px solid black",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "400px",
    margin: "auto",
    backgroundColor: "white",
  },
  
}

export default FormComponent;
