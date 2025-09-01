import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: "80vh" }}>
      <h1 className="display-1 fw-bold text-muted">404</h1>
      <h2 className="mb-4">Oops! Page not found</h2>
      <p className="mb-4 fs-5 text-secondary">
        The page you’re looking for doesn’t exist.  
      </p>
      <Link to="/" className="btn btn-primary px-4 py-2 rounded-pill">
        Go to Zerodha’s Home
      </Link>
    </div>
  );
}

export default NotFound;
