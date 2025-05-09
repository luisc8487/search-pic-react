import axios from "axios";
require("dotenv").config();

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${process.env.API_KEY}`,
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
