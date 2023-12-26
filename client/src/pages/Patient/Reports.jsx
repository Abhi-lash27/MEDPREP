import React from 'react'
import img from '../../pages/Nurse/Images/img7.jpeg'
import SearchBar from './SearchBar'
import PatientNav from '../../components/Navbar/Patient-Nav'
import { useState } from 'react'
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
  return (
    <div>
        <PatientNav></PatientNav>
        <br></br>
        <SearchBar handleSearch={handleSearch}></SearchBar>
    <div className="container">
    <div className="PatientLayout">
      <div className="PatientLayout">
      <div className="returnCart">
         <br></br>
        <h1>Reports</h1>
        {filteredItems.map((value)=>(
        <div className="list" >
          <div className="item">
            <img src={img} alt="Patient" />
            <div className="info" >
              <div className="name">{value.Name}</div>
              <div className="description" >
                ....
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
