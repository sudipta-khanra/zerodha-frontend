import React from "react";

function RightSection({ productName, productDescription, learnMore, imageURL }) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-5 mt-5">
          <h1 style={{marginTop: "120px"}}>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}> Learn More</a>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-5 mb-5">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
