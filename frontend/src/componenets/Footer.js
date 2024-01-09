import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "1.5rem",
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    width: "100%",
  };

  return (
    <div style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Crypto Investigator. All rights reserved.</p>
    </div>
  );
}

export default Footer;
