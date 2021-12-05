import axios from "axios";
import { ICards, IUser } from "../decl";

// export const getCards = async (): Promise<ICards> => {
//   try {
//     const res = await axios.get(`${process.env.REACT_APP_BASE_URL2}/data.json`);
//     return res.data;
//   } catch (error) {
//     console.error("error", error);
//     return { title: "fail", items: [], urlSuffixe: "http://error" };
//   }
// };

const tokenURL = window.location.href;
const accessToken = tokenURL.substring(29);
localStorage.setItem("userToken", accessToken == null ? "error" : accessToken);

console.log("token: " + accessToken);

export const getUserInfos = async (): Promise<IUser> => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/getUserInfos`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("error", error);
    return {
      id: 0,
      userId: "fail",
      username: "fail",
      userImageUrl: "fail",
      alreadyVoted: false,
    };
  }
};

//
// const [authTokens, setAuthTokens] = useState<string | null>(() =>
//     localStorage.getItem("authToken")
//         ? JSON.parse(<string>localStorage.getItem("authToken"))
//         : null
// );
//
// const [user, setUser] = useState<string | null>(() =>
//     localStorage.getItem("authToken")
//         ? jwtDecode(<string>localStorage.getItem("authToken"))
//         : null
// );
