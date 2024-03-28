import React from "react";
import { useState } from "react";

const CreateReports = () => {
  const [Data, setData] = useState(null);

  const handelClick = async () => {
    const formData = new FormData();
    formData.append("pdf", Data);
    const response = await fetch("http://localhost:2222/api/files", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.ok) {
      console.log("File uploaded");
    }
  };

  return (
    <div>
      <form onSubmit={handelClick}>
        <input type="text" placeholder="Patient Name" />
        <input type="text" placeholder="Age" />

        <label>Create a Report</label>
        <input type="file" onChange={(e) => setData(e.target.files[0])} />
        <button>Upload PDF</button>
      </form>
    </div>
  );
};

export default CreateReports;
