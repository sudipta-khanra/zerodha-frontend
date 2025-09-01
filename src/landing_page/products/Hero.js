import React from "react";

function Hero() {
  return (
    <div className="container border-bottom"  style={{ 
        textAlign: "center",
        padding: "100px 0",
        margin: "0 277px"
        }}>
      <div className="text-muted p-3">
        <h1 style={{ fontSize: "44px", padding: "10px 0 15px" }}>Zerodha Products</h1>
        <p  style={{ fontSize: "20px" }} >Sleek, modern, and intuitive trading platforms</p>
        <p>
          Check out our{" "}
          <a href="#">
            {" "}
            investment offerings<i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
      <div className="row"></div>
    </div>
  );
}

export default Hero;
