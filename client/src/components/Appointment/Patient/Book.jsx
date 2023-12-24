import {React,useState} from 'react'
 import './Book.css'
import {useNavigate} from 'react-router-dom'

const Book = ({onSave}) => {
    const [formData, setFormData] = useState({
        name: '',
        phnno:'',
        selectedDate: '',
        selectedTime:"", 
        reason:'',
      });
    
      const navigate = useNavigate();

      

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleDateChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleTimeChange = (e) => {
        const { name, value, selectedIndex } = e.target;
        const selectedLabel = e.target.options[selectedIndex].text;
    
        setFormData({
          ...formData,
          [name]: value, // Store the value in the state
          selectedTimeLabel: selectedLabel, //  for display
        });
      };
      const handleDoctorChange = (e) => {
        const { name, value, selectedIndex } = e.target;
        const selectedLabel = e.target.options[selectedIndex].text;
    
        setFormData({
          ...formData,
          [name]: value, // Store the value in the state
          selectedDoctorLabel: selectedLabel, //  for display
        });
      };


      const handleSubmit = (e) => {
        e.preventDefault();

        if (onSave) {
          onSave(formData);
        }

        navigate('/prevapp');

        
      };

      return (
        <div className='assam'>
            <section>
            <h1 className='heading'>Book Appointment</h1>
            <div className='container'>
                <div className='form-container'>
                    <form onSubmit={handleSubmit} className='form'>
                
                          <div className='input-box'>
                    <label>Name<span> *</span></label>
                    <input type='text' name='name' id='name'
                    value={formData.name}
                    onChange={handleChange} required/>
                           </div>
    
    
                        <div className='input-box'>
                    <label>Phone Number<span> *</span></label>
                    <input type='text' name='phnno' id='phnno'
                    value={formData.phnno}
                    onChange={handleChange} required/>
                       </div>
    
    
                        <div className='column'>
                <div className='input-box'>
                    <label>Schedule  Date<span> *</span></label>
                    <input type='date' name='selectedDate' id='selectedDate'
                     value={formData. selectedDate}
                     onChange={handleDateChange}/>
                </div>
    
                <div className='input-box'>
                    <label>Schedule Time <span> *</span></label>
                    <select name='selectedTime' value={formData.selectedTime} onChange={handleTimeChange}>
      <option value="none">Select a Time slot</option>
      <option value="first">10:00am - 12:00pm</option>
      <option value="second">1:00pm - 4:00pm</option>
      <option value="third">5:00pm - 8:00pm</option>
    </select>
    </div>
                         </div>
                    {/* <input type='time' name='schtime' id='schtime'
                     value={formData. selectedTime}
                     onChange={handleInputChange}/>
                    */}
                
                         <div className='input-box'>
                  <label>Select Specialist <span> *</span> </label>
                  <select name='doctor' id='doctor' value={formData.doctor} onChange={handleDoctorChange}>
                    <option value='none'>Select a Doctor</option>
                    <option value='one'>Dr.Vandana</option>
                    <option value='two'>Dr.Harit</option>
                    <option value='three'>Dr.Varsha</option>
                    <option value='four'>Dr.Subhash</option>
                    <option value='five'>Dr.Kannappan</option>
                  </select>
    
                          </div>
                
                         <div className='input-box'>
                    <label>Reason For Appointment <span> *</span></label>
                    <input type='text' name='reason' id='reason'
                    value={formData.reason}
                    onChange={handleChange}/>
                         </div>
    
                
                           <button className='btn'>Make An Appointment </button>
             
                   </form>
                 </div>
    
                <div className='col-2'>
                  <img src="https://d57439wlqx3vo.cloudfront.net/iblock/6c8/6c8a9814c0ed48eff1b76a77fbfa5eca/8ff3f5e2d3bb95b2511f76dd128e622f.jpg"  alt="appointment"/>
                </div>
               
            </div>
            </section>
        </div>
        
      )
    }
    
    export default Book
    