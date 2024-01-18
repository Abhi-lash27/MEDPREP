import React from 'react'
import './NurseIP.css'

const NurseIP = () => {
  return (
    <div>
        <div className='nurse-ip'>
            <form className='nurse-ip-form'>
              <h2>PERSONAL INFORMATION</h2>

              <div className='ip-box'>
              <div className='ip-col'>
                <label className='ip-label' htmlFor='ip-fname'>First Name</label>
                <input type="text" placeholder='first name' name='ip-fname'  />

                <label className='ip-label' htmlFor='ip-lname'>Last Name</label>
                <input type="text" placeholder='last name' name='ip-lname'  />
                </div>
                </div>
                

                <div className='ip-box'>
                <label className='ip-label' htmlFor='ip-age'>Age</label>
                <input type="text" placeholder='Enter Age' name='ip-age'  />
                </div>

                <div className='ip-box'>
                <label className='ip-label' htmlFor='ip-dob'>DOB</label>
                <input type="date" name='date'  />
                </div>

                <div className='ip-box'>
                <label className='ip-label' htmlFor='ip-gender'>Gender</label>
                <select className='ip-sel' >
                <option value='' disabled> --Select Gender--</option>
                  <option value='ip-male'>Male</option>
                  <option value='ip-female'>Female</option>
                </select>
                </div>

                <div className='ip-box'>
                <label className='ip-label' htmlFor='ip-phoneno'>Phone Number</label>
                <input type="text" name='ip-phoneno' placeholder='Enter Phone Number' maxlength="10" />
                </div>

                <div className='ip-box'>
                <label className='ip-label' htmlFor='ip-email'>Email</label>
                <input type="text" name='ip-email' placeholder='Enter Email'  />
                </div>

                <div className='ip-box'>
                  <div className=''>
                <label className='ip-label' htmlFor='ip-address'>Address</label><br></br>
                <label  className='ip-label'>Address Line-1</label>
                <input type="text" placeholder='Enter Address' name='ip-address'  />
                <label className='ip-label'>Address Line-2</label>
                <input type="text" placeholder='Enter Address' name='ip-address'  />
                <label className='ip-label'>City</label>
                <input type="text" placeholder='Enter city' name='ip-address'  />
                <label className='ip-label'>State</label>
                <input type="text" placeholder='Enter State' name='ip-address'  />
                <label className='ip-label'>Pincode</label>
                <input type="text" placeholder='Enter Pincode' name='ip-address'   />
                </div>
                </div>

                {/* edu */}
                <h2>EDUCATION QUALIFICATION</h2>
                <h4>HIGH SCHOOL</h4>
                
                <div className='ip-ed'>
                <div className='ip-box'>
                  <div className='ip-col'>
                <label className='ip-label'>Board</label>
                <input type="text" placeholder='' name='ip-board'  />
                </div>
                

                <div className='ip-box'>
                <label className='ip-label'>School  </label>
                <input type="text" placeholder='' name='ip-school'  />
                </div>

                <div className='ip-box'>
                <label className='ip-label'>Year of Completion</label>
                <input type="text" placeholder='' name='ip-year'  />
                </div>
                
                <div className='ip-box'>
                <label className='ip-label'>Percentage</label>
                <input type="text" placeholder='' name='ip-per'  />
                </div>
</div>
                </div>

                <h4>UG </h4>
                <div className='ip-box'>
                <label className='ip-label'>University  </label>
                <input type="text" placeholder='' name='ip-univ'  />
                </div>
               
                <div className='ip-box'>
                <label className='ip-label'>Batch  </label>
                <input type="text" placeholder='0000-0000' name='ip-batch' maxLength='9' />
                </div>
               
                <div className='ip-box'>
                <label className='ip-label'>Percentage/CGPA  </label>
                <input type="text" placeholder='' name='ip-cgpa'  />
                </div>

                <h4>PG </h4>
                <div className='ip-box'>
                <label className='ip-label'>University  </label>
                <input type="text" placeholder='' name='ip-univ'  />
                </div>

                <div className='ip-box'>
                <label className='ip-label'>Batch  </label>
                <input type="text" placeholder='0000-0000' name='ip-batch' maxLength='9' />
                </div>
          
                <div className='ip-box'>
                <label className='ip-label'>Percentage/CGPA  </label>
                <input type="text" placeholder='' name='ip-cgpa'  />
                </div>


                <h2>EXPERIENCE</h2>

                <div className='ip-box'>
                <label className='ip-label'>Organisation </label>
                <input type="text"  name='ip-org'  />
                </div>

                <div className='ip-box'>
                <label className='ip-label'>Position </label>
                <input type="text"  name='ip-pos'  />
                </div>

                <div className='ip-box'>
                <label className='ip-label'>Year of Experience </label>
                <input type="text"  name='ip-org'  />
                </div>
            </form>
        </div>
    </div>
  )
}

export default NurseIP