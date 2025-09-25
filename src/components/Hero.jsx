import React from "react";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url('/resources/sfondotop1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay">
        <h1 className="hero-title">TWENTY ONE PILOTS</h1>
        <p className="hero-text">
          Twenty One Pilots is an American musical duo from Columbus, Ohio.<br />
          Initially a band, the group was formed in 2009 by lead vocalist Tyler Joseph along with Nick Thomas and Chris Salih, who both left in 2011.<br />
          Since their departure, the line-up has consisted of Joseph and drummer Josh Dun.
        </p>
      </div>
    </section>
  );
}

export default Hero;
