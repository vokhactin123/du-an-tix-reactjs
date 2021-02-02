import axios from "axios";
import swal from "sweetalert";
import { startLoading, stopLoading } from "./Common";
function handleUserLoginRequest(user, history) {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    })
      .then(function (ress) {
        localStorage.setItem("user", JSON.stringify(ress.data));
        dispatch(saveUserLogin(ress.data.taiKhoan));
        history.push("/");
      })
      .catch(function (err) {
        console.log(err.response.data);
        swal("click button to close!", `${err.response.data}`, "error");
      });
  };
}
function saveUserLogin(data) {
  return {
    type: "SAVE_USER_LOGIN_SUCCESS",
    payload: data,
  };
}
function GetInfoByLogout(data) {
  return {
    type: "SAVE_USER_LOGOUT",
    payload: data,
  };
}

function RegMemberFromForm(user, history) {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: user,
    })
      .then(function (ress) {
        console.log(ress.data);
        dispatch(ResetErMess(null));
        history.goBack();
      })
      .catch(function (err) {
        swal("click the button to close!", `${err.response.data}`, "error");
      });
  };
}
function ResetErMess(err) {
  return {
    type: "RESET_ERR_MESS",
    payload: err,
  };
}
function fetchInfoUserRequest(username) {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      data: username,
    })
      .then(function (ress) {
        console.log(ress.data);
        dispatch(fetchInfoUserSuccess(ress.data));
        dispatch(stopLoading());
      })
      .catch(function (err) {
        dispatch(fetchInfoUserFailed(err));
        dispatch(stopLoading());
      });
  };
}
function fetchInfoUserSuccess(data) {
  return {
    type: "FETCH_INFO_USER_BOOKING_SUCCESS",
    payload: data,
  };
}
function fetchInfoUserFailed(err) {
  return {
    type: "FETCH_INFO_USER_BOOKING_FAILED",
    payload: err,
  };
}
export { fetchInfoUserRequest };
export { handleUserLoginRequest };
export { GetInfoByLogout };
export { RegMemberFromForm };
export { ResetErMess };
function updateUser(data, history) {
  return (dispatch) => {
    const userAdmin = JSON.parse(localStorage.getItem("user"));
    axios({
      method: "PUT",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      data: data,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`,
      },
    })
      .then((ress) => {
        console.log(ress.data);
        swal("", "UPDATE USER SUCCESS", "success").then(() => {
          history.goBack();
        });
      })
      .catch((err) => {
        console.log(err.response?.data);
        swal("", `${err.response?.data}`, "warning");
      });
  };
}
export { updateUser };
