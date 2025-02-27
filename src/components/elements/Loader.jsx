import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center p-3">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loader;
