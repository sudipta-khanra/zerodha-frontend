import React from "react";

function Team() {
  return (
    <div
      className="container me-4"
      style={{
        margin: "0 244px",
      }}
    >
      <div className="row p-5">
        <h1 className="fs-2 text-center">People</h1>
      </div>

      <div
        className="row p-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-6 text-center">
          <img
            src="./media/picture/sudipta.png"
            alt="Team"
            style={{
              borderRadius: "50%",
              width: "50%",
            }}
          />

          <div
            style={{
              textAlign: "center",
              margin: "5px",
              lineHeight: "3",
              padding: "14.4px 0 10px",
            }}
          >
            <h4>Sudipta Khanra</h4>
            <p >Founder, CEO</p>
          </div>
        </div>

        <div className="col-6 fs-6 mt-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            <br /> hurdles he faced during his decade long stint as a trader.
            Today, <br />
            Zerodha has changed the landscape of the Indian broking industry.
            <br />
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee{" "}
            <br />
            (SMAC) and the Market Data Advisory Committee (MDAC).
            <br />
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
