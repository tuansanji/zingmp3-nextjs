import axiosClient from "./axiosClient";

const zingApi = {
  getSong(songId: string) {
    const url = `/song/${songId}`;
    return axiosClient.get(url);
  },
  searchSong(keyword: string) {
    const url = `/search?keyword=${keyword}`;
    return axiosClient.get(url);
  },
  getTop100() {
    const url = `/top100`;
    return axiosClient.get(url);
  },
  getInfoSong(songId: string) {
    const url = `/infosong/${songId}`;
    return axiosClient.get(url);
  },
  getLyric(songId: string) {
    const url = `/getLyric/${songId}`;
    return axiosClient.get(url);
  },
  getVideo(songId: string) {
    const url = `/video/${songId}`;
    return axiosClient.get(url);
  },
};
export default zingApi;
