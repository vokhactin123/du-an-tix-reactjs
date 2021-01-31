import axios from "axios";
import swal from "sweetalert";
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
export { handleUserLoginRequest };
export { GetInfoByLogout };
export { RegMemberFromForm };
export { ResetErMess };
