import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFiles } from "../redux/ducks/files";

const FileList = () => {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.files);

  useEffect(() => {
    const mockData = [
      { name: "File 1", description: "Description 1" },
      { name: "File 2", description: "Description 2" },
    ];

    dispatch(setFiles(mockData));
  }, [dispatch]);

  return (
    <div>
      <>Files PAGE</>
      {files.map((file, index) => (
        <div key={index}>
          <h3>{file.name}</h3>
          <p>{file.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FileList;
