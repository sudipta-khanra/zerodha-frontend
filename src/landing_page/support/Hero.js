import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="support_hero">
      <div className=" p-5" id="supportWrapper">
        <h3  style={{marginLeft: "262px"}}>Support Portal</h3>
        <a href="#"  style={{marginRight: "450px"}}>Track Tickets</a>
      </div>

      <div className="row ms-5">
        <div className="col-5 mb-5 " style={{marginLeft: "250px"}}>
          <h4 className="mb-5">
            Search for an answer or browse help topics to create a ticket
          </h4>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
              className="input-field"
            />
            <span className="search-icon">
              <img
                src="/media/picture/search.png"
                style={{ width: "20px" }}
                alt="search"
              />
            </span>
          </div>
          <br />
          <a href="#">Track account opening </a>
          <a href="#">Track segment activation </a>
          <a href="#">Intraday margins </a> <br />
          <a href="#">Kite user manual</a>
        </div>
        <div className="col-5 p-4 mt-4">
          <h1 style={{ fontSize: "22px" }}>Featured</h1>
          <ol>
            <li>
              <a href="#">Latest Intraday leverages and Square-off timings</a>
            </li>
            <li>
              {" "}
              <a href="#">Rights Entitlements listing in April 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
