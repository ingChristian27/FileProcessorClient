import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchFiles } from "../redux/ducks/files";

const useFiles = (fileName) => {
  const dispatch = useDispatch();
  const { files, loading, error } = useSelector((state) => state.files);

  useEffect(() => {
    dispatch(fetchFiles(fileName));
  }, [fileName, dispatch]);

  return { files, loading, error };
};

export default useFiles;
