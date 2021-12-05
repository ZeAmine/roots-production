import { useState } from "react";
import axios from "axios";

const accessToken = "RnxPxdAzsICpI8G81cATL_Qt2Nh-KMcDVSvopPtkTmI";
const apiURL = "https://localhost:3000";

const authAxios = axios.create({
  baseURL: apiURL,
  headers: {
    Authorization: `Basic ${accessToken}`,
  },
});


const [user, setUser] = useState<string | null>(() =>
  localStorage.getItem("authToken")
    ? JSON.parse(<string>localStorage.getItem("authToken"))
    : null
);

const fetchData = async (): Promise<any> => {
  try {
    const res = await authAxios.get(`${apiURL}`);
    setUser(res.data);
  } catch (error) {
    console.error("error", error);
    return [];
  }
};
