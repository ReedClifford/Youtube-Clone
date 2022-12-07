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
        "X-RapidAPI-Key": "8c28eac14emsh49b5972a045d795p18e428jsn4e792d1f7044",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
