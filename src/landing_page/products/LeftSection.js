import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {

return (
    <div className="container  mb-3">
      <div className="row p-5">
        <div className="col-5">
          <img src={imageURL} />
        </div>
        <div className="col-2"></div>
        <div className="col-5 mt-3 ">
          <h1 style={{marginTop: "40px"}}>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "110px" }}>
              {" "}
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/picture/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/picture/appstoreBadge (2).svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

}

export default LeftSection;
