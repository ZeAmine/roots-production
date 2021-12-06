import axios from "axios";
import { IUser, IVote, IArtist } from "../decl";

const tokenURL = window.location.href;
export const accessToken = tokenURL.substring(44);

localStorage.setItem("userToken", accessToken == null ? "error" : accessToken);

const params = { id: "4y0ipLdZi2Vl560XOzRbie" };

export const getUserInfos = async (): Promise<IUser> => {
  try {
    const res = await axios.get(`https://roots.tinker.ovh/getUserInfos`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data[0];
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
    return res.data[0];
  } catch (error) {
    console.error("error", error);
    return { vote: "fail" };
  }
};

export const getVoteCancel = async (): Promise<IVote> => {
  try {
    const res = await axios.put(`https://roots.tinker.ovh/vote`, params, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data[0];
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
    return res.data[0];
  } catch (error) {
    console.error("error", error);
    return {
      id: 0,
      artistId: "fail",
      artistName: "fail",
      artistImageUrl: "fail",
      artistFollowers: 0,
      artistPopularity: 0,
      artistVotes: 0,
    };
  }
};
