import axios from "src/axios";
import { ICards } from "../decl";

export const getCards = async (): Promise<ICards> => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/data.json`);
    return res.data;
  } catch (error) {
    console.error("error", error);
    return { title: "fail", items: [], urlSuffixe: "http://error" };
  }
};
