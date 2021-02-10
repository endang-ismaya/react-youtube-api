import axios from "axios"

const KEY = "AIzaSyAC-G_UD_MnFs0_DL0xQqHXR1CXbch3uPc"

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
})
