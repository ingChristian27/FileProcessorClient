import { Container, Table } from "react-bootstrap";
import { FileItem } from "../elements";

const FileList = ({ data }) => {
  return (
    <Container>
      <h3 className="my-4">Files List</h3>
      {data.map((fileData, index) => (
        <div key={index}>
          <h4 className="my-3">{fileData.file}</h4>
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
              {fileData.lines.map((line, index) => (
                <FileItem key={index} file={line} />
              ))}
            </tbody>
          </Table>
        </div>
      ))}
    </Container>
  );
};

export default FileList;
