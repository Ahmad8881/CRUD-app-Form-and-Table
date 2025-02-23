import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormComponent from "./assets/FormComponent";
import DataList from "./assets/DataList";
import Navbar from "./assets/Navbar";
import './index.css'; 

function App() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(data));
  }, [data]);

  const handleAdd = (newEntry) => {
    setData((prevData) => [...prevData, newEntry]);
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData));
  };

  return (
    
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<FormComponent onAdd={handleAdd} />} />
          <Route path="/table" element={<DataList data={data} onDelete={handleDelete} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
