import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";

export const fetchFromAPi = async (search) => {
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        q: search,
        part: "snippet,id",
        regionCode: "US",
        maxResults: "50",
        order: "date",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
