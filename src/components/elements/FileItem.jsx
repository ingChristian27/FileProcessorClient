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
  
  export default FileItem