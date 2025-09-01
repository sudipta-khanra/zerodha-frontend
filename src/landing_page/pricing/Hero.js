import React from "react";

function Hero() {
  return (
    <div className="container mt-5  text-muted text-center">
      <div className="row ">
        <section style={{ padding: "100px 20px" }}>
          <h1 style={{ fontSize: "44px", margin: "0 0 20px" }}>Charges</h1>
          <p
            style={{
              fontSize: "22px",
              marginBottom: "80px",
              fontWeight: "400",
              color: "#9B9B9B",
            }}
          >
            List of all charges and taxes
          </p>
        </section>

        <div className="col-4">
          <img src="/media/picture/pricingMF.svg" style={{ width: "70%" }} />
          <h1 style={{ fontSize: "30px", margin: "0 0 20px" , fontWeight: "600px"}}>
            Free equity delivery
          </h1>
          <p style={{ fontSize: "18px" }}>
            All equity delivery investments (NSE, BSE), <br /> are absolutely
            free — ₹ 0 brokerage.<br />
          </p>
        </div>

        <div className="col-4">
          <img
            src="/media/picture/intradayTrades.svg"
            style={{ width: "70%" }}
          />
          <h1 style={{ fontSize: "30px", margin: "0 0 20px", fontWeight: "600px" }}>
            Intraday and F&O trades
          </h1>
          <p style={{ fontSize: "18px" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per <br />executed order on
            intraday trades across<br /> equity, currency, and commodity trades. Flat<br />
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-4">
          <img src="/media/picture/pricingMF.svg" style={{ width: "70%" }} />
          <h1 style={{ fontSize: "30px", fontWeight: "600px" }}>Free direct MF</h1>
          <p style={{ fontSize: "18px" }}>
            All direct mutual fund investments are<br /> absolutely free — ₹ 0
            commissions & DP <br />charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
