import axios from "axios";
import config from "../config";

const getFiles = async (fileName = "") => {
  const url = `${config.apiBaseUrl}/files/data`;
  const query = { params: { fileName } };
  const response = await axios.get(url, query);
  return response?.data?.files;
};

export default getFiles;
