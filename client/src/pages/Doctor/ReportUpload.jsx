import React from 'react';
import DoctorNav from '../../components/Navbar/Doctor-Nav';
import Footer from '../../components/Footer/Footer';
import './ReportUpload.css';

const ReportUpload = () => {
  
  const handleUpload = () => {
    // Perform file upload logic here
    console.log('File uploaded:', formData.file);
  };

  return (
    <div>
      <DoctorNav />
      <div className="report-upload-container">
        <div className="upload-form">
          <h2 className="doc-title">Upload Report</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="file" className="form-label">Select Report:</label>
              <input
                type="file"
                id="file"
                name="file"
                className="file-input"
                accept=".pdf,.doc,.docx,.txt"
                required
              />
            </div>
            <div>
              <button type="button" onClick={handleUpload} className="upload-button">Upload</button>
            </div>
            <br/>
            <div>
              <button type="submit" className="submit-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ReportUpload;
