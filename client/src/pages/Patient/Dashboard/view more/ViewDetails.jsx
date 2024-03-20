import {React,useState} from 'react'
import './View.css';
import PatientNav from '../../../../components/Navbar/Patient-Nav';
import { useNavigate } from 'react-router-dom';

const ViewDetails = () => {

    const DocDetails=[
        {
            docProfile:"https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-621.jpg",
            docName:'Dr.M.Varsha ',
            docDegree:'MBBS, MD',
            docSpeciality:'chief Surgeon',
            docExp:'8 ',
            docAge:'30',
            docGender:'Female',
            docEmail:'abc@medpreop.com',
            docLang:'English,Tamil,Malayalam',
            docDays:'Mon,Wed,fri,sun',
            docTime:'12.30pm-4.40pm',
        },
    ];

    const [dInfo, setDInfo] = useState([...DocDetails]);
    const navigate= useNavigate();


  return (
    <div>


        <PatientNav/>
        {dInfo.map((doc,index) =>(

           <div className='container-D'>
        <h2 className='title'>Doctor Details</h2>
        <div key= {index} className='left-bg'>
        <div  className='left-D'>
            <img src={doc.docProfile} />
        </div>
        </div>
        <div className='right-D'>
        <div className='next-1'>
                <h1 className='nam'>{doc.docName} ,{doc.docDegree}.</h1>
                <i className='ita'>{doc.docSpeciality}</i>
                <hr/>
            
                <table className='next-table'>
                    <tbody>
                        <tr className='table-row'>
                            <td>Speciality: </td>
                            <td>{doc.docSpeciality}</td>
                        </tr>
                        <tr className='table-row'>
                            <td>Degree: </td>
                            <td>{doc.docDegree}</td>
                        </tr>
                        <tr className='table-row' >
                            <td>Experience: </td>
                            <td>{doc.docExp}</td>
                        </tr>
                        <tr className='table-row'>
                            <td>Age: </td>
                            <td>{doc.docAge}</td>
                        </tr>
                        <tr className='table-row'>
                            <td>Gender: </td>
                            <td>{doc.docGender}</td>
                        </tr>
                        <tr className='table-row'>
                            <td>Email </td>
                            <td>{doc.docEmail}</td>
                        </tr>
                        <tr className='table-row'>
                            <td>Languages Known: </td>
                            <td>{doc.docLang}</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='avail'>Availability: </td>
                        </tr>
                        <tr className='table-row'>
                            <td>Days: </td>
                            <td>{doc.docDays} </td>
                        </tr>
                        <tr className='table-row'>
                            <td>Time: </td>
                            <td>{doc.docTime} </td>
                        </tr>
                    </tbody>
                </table>
                <div className='action-buttons'>
                <button className='btn'  onClick={()=>navigate('/patient/book')}><span>Book Appointment</span></button>
                </div>

            </div>
            </div>
            </div>
            ))}
      
 
    </div>
  )
}

export default ViewDetails