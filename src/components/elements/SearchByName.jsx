import React from "react";

import { Form } from "react-bootstrap";

const SearchByName = ({ fileName, setFileName }) => {
  const handleSearchChange = (e) => setFileName(e.target.value);

  return (
    <Form>
      <Form.Control
        type="text"
        placeholder="Search by file name"
        value={fileName}
        onChange={handleSearchChange}
      />
    </Form>
  );
};

export default SearchByName;
