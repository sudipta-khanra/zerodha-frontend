import React from "react";

function Universe() {
  return (
    <div
      className="container text-muted mt-5"
      style={{
        fontFamily: "inter",
        fontSize: "13px",
      }}
    >
      <div className="row p-5">
        <h1 className="text-center mb-4">The Zerodha Universe</h1>
        <p
          className="text-center"
          style={{
            marginBottom: "60px",
            fontSize: "17.5px",
          }}
        >
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 text-center">
          <img
            src="/media/picture/zerodhaFundhouse.png"
            style={{ width: "42%" }}
            className="mb-3"
          />
          <p>
            Our asset management venture <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
            <br />
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img
            src="/media/picture/sensibull-logo.svg"
            style={{ width: "57%" }}
            className="mb-3"
          />
          <p>
            Options trading platform that lets you
            <br />
            create strategies, analyze positions, and examine
            <br />
            data points like open interest, FII/DII, and more.
            <br />
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img
            src="/media/picture/tijori.svg"
            style={{ width: "32%" }}
            className="mb-3"
          />
          <p>
            Investment research platform
            <br />
            that offers detailed insights on stocks,
            <br />
            sectors, supply chains, and more.
            <br />
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img
            src="/media/picture/streakLogo.png"
            style={{ width: "42%" }}
            className="mb-3"
          />
          <p>
            Systematic trading platform
            <br />
            that allows you to create and backtest
            <br />
            strategies without coding.
            <br />
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img
            src="/media/picture/smallcaseLogo.png"
            style={{ width: "52%" }}
            className="mb-3"
          />
          <p>
            Thematic investing platform
            <br />
            that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
            <br />
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img
            src="/media/picture/dittoLogo.png"
            style={{ width: "34%" }}
            className="mb-3"
          />
          <p>
            Personalized advice on life
            <br />
            and health insurance. No spam
            <br />
            and no mis-selling.
            <br />
          </p>
        </div>
      </div>
      <section
        style={{
          padding: "40px 0 80px",
        }}
      >
        <div className="text-center">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{
              width: "20%",
              backgroundColor: "#387ED1",
              padding: "10px 30px",
              margin: "20px 0 0",
            }}
          >
            Sign up for free
          </button>
        </div>
      </section>
    </div>
  );
}

export default Universe;
