import { APIKEY } from "../../apiKey";
import { Dispatch } from "redux";
export const getMovie = (code: string) => async (dispatch: Dispatch<any>) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${code}&key=${APIKEY}`
    ).then((res) => res.json());
    dispatch({ type: "ADD_MOVIE", payload: response.items[0] });
  } catch (e) {}
};
