import axios from "axios";
import { startLoading } from "./Common";
function GetListMovieRequest() {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP11",
      data: null,
    })
      .then(function (ress) {
        dispatch(GetListMovieSuccess(ress.data));
        // console.log(ress.data);
      })
      .catch(function (err) {
        dispatch(GetListMovieFailed(err));
        console.log(err);
        // dispatch(stopLoading());
      });
  };
}
function GetListMovieSuccess(data) {
  return {
    type: "GET_LIST_MOVIE_SUCCESS",
    payload: data,
  };
}
function GetListMovieFailed(err) {
  return {
    type: "GET_LIST_MOVIE_FAILED",
    payload: err,
  };
}
export { GetListMovieRequest };
function handleReset(data) {
  return {
    type: "RESET_COUNT",
    payload: data,
  };
}
export { handleReset };
function getTrailerMovie(data) {
  return {
    type: "GET_TRAILER",
    payload: data,
  };
}
export { getTrailerMovie };
function closeTrailer(data) {
  return {
    type: "CLOSE_TRAILER",
    payload: data,
  };
}
export { closeTrailer };
function openTrailer(data) {
  return {
    type: "OPEN_TRAILER",
    payload: data,
  };
}
export { openTrailer };
