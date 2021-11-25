import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>No encontramos esta página</h1>
      <h2>Visitá:</h2>
      <br />
      <Link to="/login" className="link">
        Login
      </Link>
      <br />
      <Link to="/" className="link">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
