import {React,useState} from 'react'
import './Book.css'
import { useBookContext } from './Hooks/UseBookContext'
import PatientNav from '../../Navbar/Patient-Nav'
import { useTranslation,Trans } from 'react-i18next'


const Book = ({onSave}) => {
  const [Name,setName] = useState('')
  const [ph,setPh] = useState('')
  const [Date,setDate] = useState('')
  const [Time,setTime] = useState('')
  const [doc,setDoc] = useState('')
  const [reason,setReason] = useState('')

  const {t} = useTranslation()

  const handleSubmit = async () =>
  {
    const data = {Name,ph,Date,Time,doc,reason}
    const response = await fetch('http://localhost:3500/Data',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'}
           }
       )
  }
  console.log(typeof(Time))
  console.log(typeof(Date))
  
      return (
        <div>
        <PatientNav></PatientNav>
        <br></br>
        <div className='assam'>
            <section>
            <h1 className='heading' >{t('book')}</h1>
            <div className='containe_Book'>
                <div className='form-container'>
                    <form  className='form'>
                          <div className='input-box'>
                    <label>{t('Name')}<span> *</span></label>
                    <input type='text' name='name' id='name'
                    value={Name}
                    onChange={(e) => setName(e.target.value)} required/>
                  </div>
                  <div className='input-box'>
                      <label> {t('PhoneNumber')}<span> *</span></label>
                       <input type='text' name='phnno' id='phnno'
                        value={ph}
                        onChange={(e) =>setPh(e.target.value) } required size="10" />
                  </div>
                      <div className='column'>
                      <div className='input-box'>
                    <label>{t('SelectDate')}<span> *</span></label>
                    <input type='date' name='selectedDate' id='selectedDate'
                     value={Date}
                     onChange={(e) => setDate(e.target.value)} required/>
                </div>
    
                <div className='input-box'>
                    <label>{t('ScheduleTime')}<span> *</span></label>
                    <select className='select-box' name='selectedTime' value={Time} onChange={(e) => setTime(e.target.value)} required>
                    <option value="none">Select a Time slot</option>
                    <option value="10:00am - 12:00pm">10:00am - 12:00pm</option>
                    <option value="1:00pm - 4:00pm">1:00pm - 4:00pm</option>
                    <option value="5:00pm - 8:00pm">5:00pm - 8:00pm</option>
                    </select>
                 </div>
                </div>

                    {/* <input type='time' name='schtime' id='schtime'
                     value={formData. selectedTime}
                     onChange={handleInputChange}/>
                    */}

                  <div className='input-box'>
                  <label>{t('SelectSpecialist')} <span> *</span> </label>
                  <select className= 'select-box' name='doctor' id='doctor' value={doc} onChange={(e) => setDoc(e.target.value)} required>
                    <option value='none'>Select a Doctor</option>
                    <option value='Dr.Vandana'>Dr.Vandana | MBBS, DNB - Obstetrics & Gynecology</option>
                    <option value='Dr.Harit'> Dr.Harit     | MBBS, DNB - General Surgery</option>
                    <option value='Dr.Varsha'>Dr.Varsha</option>
                    <option value='Dr.Subhash'>Dr.Subhash</option>
                    <option value='Dr.Kannappan'>Dr.Kannappan</option>
                  </select>
                  </div>
                
                  <div className='input-box'>
                     <label>{t('ReasonForAppointment')} <span> *</span></label>
                     <input type='text' name='reason' id='reason'
                       value={reason}
                       onChange={(e) => setReason(e.target.value)} required/>
                  </div>
                      <button className='btn'onClick={handleSubmit} >Make An Appointment </button>
                  </form>
                 </div>   
            </div>
            </section>
        </div>
        </div>
      )
    }
    
    export default Book
    