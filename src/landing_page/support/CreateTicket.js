import React from "react";

function CreateTicket() {
  return (
    <div className="container text-start createticicon" style={{lineHeight: "2.1"}}>
      <div className="row" style={{ margin: "20px 60px 0" }}>
        <h5 className="text-muted" style={{marginBottom: "65px"}}>To create a ticket, select a relevant topic</h5>

        <div className="col-4 mb-5">
          <h5 style={{ margin: "0 0 15px 0", fontWeight: "400" }}><i class="fa-solid fa-circle-plus me-2" ></i>Account Opening</h5>
          <a href="#">Resident individual</a><br />
          <a href="#">Minor</a> <br />
          <a href="#">Non Resident Indian (NRI)</a>
          <br />
          <a href="#">Company, Partnership, HUF and LLP</a>
          <br />
          <a href="#">Glossary</a>
          <br />
        </div>
        <div className="col-4 mb-5">
          <h5 style={{ margin: "0 0 15px 0", fontWeight: "400" }}><i class="fa-regular fa-user me-2" ></i>Your Zerodha Account</h5>
          <a href="#">Your Profile</a>
          <br />
          <a href="#">Account modification</a>
          <br />
          <a href="#">
            Client Master Report (CMR) and Depository<br/> Participant (DP)
          </a>
          <br />
          <a href="#">Nomination</a>
          <br />
          <a href="#">Transfer and conversion of securities</a>
          <br />
        </div>
        <div className="col-4 mb-5">
          <h5 style={{ margin: "0 0 15px 0", fontWeight: "400"}}><i class="fa-solid fa-chart-simple me-2"></i>Kite</h5>
          <a href="#">IPO</a><br />
         
          <a href="#">Trading FAQs</a>
          <br />
          <a href="#">Margin Trading Facility (MTF) and Margins</a>
          <br />
          <a href="#">Charts and orders</a>
          <br />
          <a href="#">Alerts and Nudges</a>
          <br />
          <a href="#">General</a>
          <br />
        </div>



        <div className="col-4 mt-5">
          <h5 style={{ margin: "0 0 15px 0", fontWeight: "400" }}>
          <i class="fa-solid fa-window-maximize"></i> Funds</h5>
          <a href="#">Add money</a><br />
          <a href="#">Withdraw money</a> <br />
          <a href="#">Add bank accounts</a>
          <br />
          <a href="#">eMandates</a>
          <br />
        
        </div>
        <div className="col-4  mt-5">
          <h5 style={{ margin: "0 0 15px 0", fontWeight: "400" }}><i class="fa-solid fa-circle-notch me-2"></i>Console</h5>
          <a href="#">Portfolio</a>
          <br />
          <a href="#">Corporate actions</a>
          <br />
          <a href="#">
          Funds statement
          </a>
          <br />
          <a href="#">Reports</a>
          <br />
          <a href="#">Profile</a>
          <br />
          <a href="#">Segments</a>
          <br />
        </div>
        <div className="col-4  mt-5">
          <h5 style={{ margin: "0 0 15px 0", fontWeight: "400"}}> <i class="fa-solid fa-circle-half-stroke me-2"></i>Coin</h5>
          <a href="#"> Understanding mutual funds and Coin</a><br />
         
          <a href="#">Coin app</a>
          <br />
          <a href="#">Coin web</a>
          <br />
          <a href="#">Transactions and reports</a>
          <br />
          <a href="#">National Pension Scheme (NPS)</a>
          <br />
          
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
