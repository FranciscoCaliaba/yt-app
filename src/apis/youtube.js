import axios from "axios";

const KEY = "AIzaSyBtcE8Mi3cI0HY1d1Dr2M-7rCGDqPTaAP0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
