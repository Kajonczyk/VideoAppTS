import { APIKEY } from "../../../apiKey";

export const getMovie = async (code: string) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${code}&key=${APIKEY}`
    ).then((res) => res.json());
    return response;
  } catch (e) {}
};
