
// import React from 'react';
// import logo from '../Asset/medrep.jpg';
// import './Footer.css'

// const Footer = () => {
//   return (
//     <footer>
//       <div className='footer-main-container'>
//         <div className='footer-logo'>
//           <img src={logo} alt=''/>
//           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptatem veritatis, dolores nostrum sed, debitis fuga in nulla similique consectetur excepturi officiis accusamus optio? Temporibus soluta doloribus iure? Nulla, dolores.</p>
//           <div className="media-links">
//             <a href='#'>Facebook</a><br/>
//             <a href='#'>Instagram</a><br/>
//             <a href='#'>Twitter</a><br/>
//           </div>
//         </div>
//         <div className='footer-contact-us'>
//           <h5>Contact Us</h5>
//           <ul>
//             <li>Contact@medprep@gmail.com</li>
//           </ul>
//         </div>
//       </div>
//       <div className='copy-right-text'>
//       <p className='copy-right'>&copy; 2024. All Rights Reserved</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../Asset/medrep.jpg'

// Add the icons to the library
library.add(faEnvelope, faFacebookF, faTwitter, faInstagram);

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={logoContainerStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
      </div>
      <div style={contactStyle}>
        <p>Contact us: example@example.com</p>
      </div>
      <div style={socialMediaStyle}>
        <FontAwesomeIcon icon={faFacebookF} style={iconStyle} />
        <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
        <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
      </div>
      <div style={copyrightStyle}>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#fff',
  color: 'black',
  padding: '20px',
  textAlign: 'center',
  position:'relative',
};

const logoContainerStyle = {
  marginBottom: '20px',
};

const logoStyle = {
  width: '200px', // Adjust size as needed
};

const contactStyle = {
  marginBottom: '10px',
};

const socialMediaStyle = {
  marginBottom: '20px',
};

const iconStyle = {
  marginRight: '10px',
  color: 'black',
  fontSize: '20px',
};

const copyrightStyle = {
  borderTop: '1px solid #666',
  paddingTop: '10px',
};

export default Footer;
