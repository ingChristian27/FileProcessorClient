import PropTypes from "prop-types";

const FileItem = ({ file }) => {
  return (
    <tr>
      <td>{file.file}</td>
      <td>{file.text}</td>
      <td>{file.number}</td>
      <td>{file.hex}</td>
    </tr>
  );
};

FileItem.propTypes = {
  file: PropTypes.shape({
    file: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    hex: PropTypes.string.isRequired,
  }).isRequired,
};

export default FileItem;
