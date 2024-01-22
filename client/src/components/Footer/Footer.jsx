

import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 MED_PREP. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: 'grey',
  padding: '10px',
  marginTop: '20px',
  textAlign: 'center',
  bottom: '0',
  width: '100%',
};

export default Footer;
