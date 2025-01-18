import React, { useState, useCallback } from "react";
import { Container, Alert, Row, Col } from "react-bootstrap";
import { useFiles } from "../../hooks";
import { Loader, SearchByName } from "../../components/elements";
import { FileList } from "../../components/blocks";
import { Navbar } from "../../components/layout";

const FilePage = () => {
  const [fileName, setFileName] = useState("");
  const { files, loading, error } = useFiles(fileName);

  const handleFileNameChange = useCallback((name) => setFileName(name), []);

  return (
    <>
      <Navbar />

      <Container className="mt-4">
        <Row className="justify-content-center mb-4">
          <Col md={6}>
            <SearchByName
              fileName={fileName}
              setFileName={handleFileNameChange}
            />
          </Col>
        </Row>

        {loading ? (
          <Loader />
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : files.length === 0 ? (
          <Alert variant="info">No files found matching your search</Alert>
        ) : (
          <FileList data={files} />
        )}
      </Container>
    </>
  );
};

export default FilePage;
