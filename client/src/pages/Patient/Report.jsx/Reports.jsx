import React from 'react'
import SearchBar from '../SearchBar'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './Reports.css'
import PatientNav from '../../../components/Navbar/Patient-Nav';
const Reports = () => {
    const Data = [
      {
        "Name":"A Samples"
      },
      {
        "Name":"B Samples"
      },
      {
        "Name":"D Samples"
      },
      {
        "Name":"F Samples"
      }
      ]

      const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        const filtered = Data.filter((item) =>
        item.Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filtered);

        console.log("hi")
      };
      const [searchTerm, setSearchTerm] = useState('');
      const [filteredItems, setFilteredItems] = useState([...Data]);
      const [showDropdown, setShowDropdown] = useState(false);
      const toggleDownload = () => {
        alert('Akalya warning')
      };
    

   const fileurl = 'http://localhost:5173/Drone-Workshop-Report.pdf'
    const handeldownload = (e,url) =>
    {
      const file = url.split('/').pop();
      const aTag = document.createElement('a');
      aTag.href = url
      aTag.setAttribute("download",file);
      document.body.appendChild(aTag);
      aTag.click()
      aTag.remove()
    }
    
  return (
    <div>
      <PatientNav/>
        <h1 className='heading'>Reports</h1>

        <SearchBar handleSearch={handleSearch}></SearchBar>
    <div className="container">
    <div className="PatientLayout">
      <div className="PatientLayout">
      <div className="returnCart">
         <br></br>
        
        {filteredItems.map((value)=>(
        <div className="list" >
          <div className="item">
            <img src="https://tse1.mm.bing.net/th?id=OIP.DESibMnCsqIPZhsedjkAAwHaHa&pid=Api&P=0&h=180" alt="Patient" />
            <div className="info" >
              <div className="name">{value.Name}</div>
              <div className="description" >
                ....
              </div>
              <div className='options'>
                <IconButton onClick={toggleDownload} >
                <RemoveRedEyeIcon></RemoveRedEyeIcon>
                </IconButton>
                <IconButton onClick={(e) => handeldownload(e,fileurl)}>
                 <DownloadIcon></DownloadIcon>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Reports
