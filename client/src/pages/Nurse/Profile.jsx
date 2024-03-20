import React from 'react';
import './Profile.css'
import img1 from './img.jpg'

const Profile = ({Info}) => {
  return (
    <div className='main'>
    <div className="container_profile">
      <div className="box">
        <img src={img1} alt="" />
        <p>Name: {Info.Name} </p>
        <p>Age: {Info.Age}</p>
        <p>Gender: {Info.Gender}</p>
      </div>
      <div className="About">        <ul>
          <h1>About</h1>
        </ul>
        <ul>
          <h3>Name</h3>
          <li>{Info.Name}</li>
        </ul>
        <ul>
          <h3>Gender</h3>
          <li>{Info.Gender}</li>
        </ul>
        <ul>
          <h3>Blood Group</h3>
          <li>{Info.Blood_group}</li>
        </ul>
        <ul>
          <h3>More Info</h3>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
            still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).</p>
        </ul>
        <ul>
          <h3>PH</h3>
          <li>{Info.ph}</li>
        </ul>
        <ul>
          <h3>Email</h3>
          <li>{Info.Email}</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Profile;