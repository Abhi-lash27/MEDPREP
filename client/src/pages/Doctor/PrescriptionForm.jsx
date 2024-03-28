import React, { useState } from "react";
import DoctorNav from "../../components/Navbar/Doctor-Nav";
import Footer from "../../components/Footer/Footer";
import "./Prescription.css";

const PrescriptionForm = () => {
  const [medicine, setMedicine] = useState("");
  const [dosage, setDosage] = useState("");
  const [description, setDescription] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false); // State to track if items are uploaded

  const handleAddTodo = () => {
    if (
      medicine.trim() !== "" &&
      dosage.trim() !== "" &&
      description.trim() !== ""
    ) {
      setTodoList([...todoList, { medicine, dosage, description }]);
      setMedicine("");
      setDosage("");
      setDescription("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  };

  const handleUpload = () => {
    // Add functionality to upload todoList items
    console.log("Uploading items:", todoList);
    setIsUploaded(true);
  };

  return (
    <div>
      <DoctorNav />
      <div className="doc-form-container">
        <h2 className="doc-title">Prescription Form</h2>
        <div className="doc-form-group">
          <label className="doc-label">Medicine:</label>
          <input
            type="text"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
            className="doc-form-control"
          />
        </div>

        <div className="doc-form-group">
          <label className="doc-label">Dosage:</label>
          <input
            type="text"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            className="doc-form-control"
          />
        </div>

        <div className="doc-form-group">
          <label className="doc-label">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="doc-form-control"
          ></textarea>
        </div>

        <button onClick={handleAddTodo} className="doc-btn-add">
          Add Medicine
        </button>

        <ul className="doc-todo-list">
          {todoList.map((todo, index) => (
            <li key={index} className="doc-todo-item">
              <div>
                <strong>Medicine:</strong> {todo.medicine},{" "}
                <strong>Dosage:</strong> {todo.dosage},{" "}
                <strong>Description:</strong> {todo.description}
              </div>
              <button
                onClick={() => handleDeleteTodo(index)}
                className="doc-btn-delete"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {todoList.length > 0 && !isUploaded && (
          <button onClick={handleUpload} className="doc-btn-upload">
            Upload Prescription
          </button>
        )}

        {isUploaded && <p>Prescription Uploaded Successfully!</p>}
      </div>
      <Footer />
    </div>
  );
};

export default PrescriptionForm;
