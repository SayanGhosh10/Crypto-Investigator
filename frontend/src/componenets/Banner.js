import React from 'react';
import Nav from './Nav';

function Banner() {
  const bannerStyle = {
    backgroundImage: "url('/banner3.jpg')",
    height: "40vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };

  const textContainerStyle = {
    position: "absolute",
    top: "50%",
    left: "2%", 
    transform: "translateY(-50%)",
    textAlign: "left",
    color: "white",
    maxWidth: "60%",
  };

  const headingStyle = {
    fontSize: "2.5vw",
    fontWeight: "bold",
    marginBottom: "1.5vh",
  };

  const descriptionStyle = {
    fontSize: "1.2vw",
  };

  return (
    <div style={bannerStyle}>
      <Nav />
      <div style={textContainerStyle}>
        <h1 style={headingStyle}>Welcome to Crypto Investigator</h1>
        <p style={descriptionStyle}>Give your public key and investigate if it's real</p>
      </div>
    </div>
  );
}

export default Banner;
