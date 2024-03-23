import React from 'react'
import SearchBar from '../SearchBar'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PatientNav from '../../../components/Navbar/Patient-Nav';
import { useTranslation,Trans } from 'react-i18next'
const Prescription = () => {
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
        const toggleDownload = () => {
          alert('Akalya warning')
        };
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

  return (
    <div>
    <PatientNav/>
    <h1 className='heading'>{('Prescription')}</h1>
    <SearchBar handleSearch={handleSearch}></SearchBar>
        {Data && <div className="container">
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
                  <IconButton onClick={toggleDownload}>
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
        </div>}
        {!Data && <div>
           <h1>{t('No prescription found')}</h1> 
        </div>}
        </div>
  )
}

export default Prescription
