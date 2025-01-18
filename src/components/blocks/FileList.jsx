import PropTypes from "prop-types";
import { Container, Table } from "react-bootstrap";
import { FileItem } from "../elements";

const FileList = ({ data }) => {
  return (
    <Container>
      <h3 className="my-4">Files List</h3>
      {data.map(({ file, lines }, index) => (
        <div key={index}>
          <h4 className="my-3">{file}</h4>
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>File</th>
                  <th>Text</th>
                  <th>Number</th>
                  <th>Hex</th>
                </tr>
              </thead>
              <tbody>
                {lines.map((line, index) => (
                  <FileItem key={index} file={line} />
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      ))}
    </Container>
  );
};

FileList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string.isRequired,
      lines: PropTypes.arrayOf(
        PropTypes.shape({
          file: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          number: PropTypes.number.isRequired,
          hex: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default FileList;
