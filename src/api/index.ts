import axios from "axios";
import { ICards, IUser, IVote, IArtist } from "../decl";

const tokenURL = window.location.href;
export const accessToken = tokenURL.substring(29);
localStorage.setItem("userToken", accessToken == null ? "error" : accessToken);

const params = { id: "1DgBVE3lCnC7Osg9zpAt6N" };

export const getUserInfos = async (): Promise<IUser> => {
  try {
    const res = await axios.get(`https://roots.tinker.ovh/getUserInfos`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
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

export const getVote = async (): Promise<IVote> => {
  try {
    const res = await axios.put(`https://roots.tinker.ovh/vote`, params, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("error", error);
    return { vote: "fail" };
  }
};

export const getArtist = async (): Promise<IArtist> => {
  try {
    const res = await axios.put(`https://roots.tinker.ovh/getArtist`, params, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("error", error);
    return {
      id: 0,
      artistId: "fail",
      artistName: "fail",
      artistImgUrl: "fail",
      artistFollowers: 0,
      artistPopularity: 0,
      artistVotes: 0,
    };
  }
};

// export const getCards = async (): Promise<ICards> => {
//   try {
//     const res = await axios.get(`${process.env.REACT_APP_BASE_URL2}/data.json`);
//     return res.data;
//   } catch (error) {
//     console.error("error", error);
//     return { title: "fail", items: [], urlSuffixe: "http://error" };
//   }
// };
