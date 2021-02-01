import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInfoUserRequest } from "../../redux/actions/User";
import "./InfoUser.scss";
import format from "date-format";
import Switch from "@material-ui/core/Switch";
import { NavLink } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
function InfoUser(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  let dispatch = useDispatch();
  console.log(user.taiKhoan);
  let [showBookingHistory, setShowBookingHistory] = useState(false);
  useEffect(() => {
    if (user) {
      let username = { taiKhoan: user?.taiKhoan };
      dispatch(fetchInfoUserRequest(username));
    }
  }, []);
  let infoUserBooking = useSelector((state) => {
    return state.UserReducer.infoUserBooking;
  });
  function renderListHistoryBooking() {
    if (infoUserBooking?.thongTinDatVe) {
      return infoUserBooking?.thongTinDatVe?.map((item, index) => {
        return (
          <tr>
            <td scope="row" className="first__style">
              <p>{item.tenPhim}</p>
            </td>
            <td>{format("dd/MM/yyyy", new Date(item.ngayDat))}</td>
            <td>{item.maVe}</td>
            <td>{item.giaVe}đ</td>
          </tr>
        );
      });
    }
  }
  function handleShowBookingHistory() {
    setShowBookingHistory(!showBookingHistory);
  }
  return (
    <div>
      <div className="wp__switch">
        <Switch
          checked={showBookingHistory}
          onChange={handleShowBookingHistory}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </div>
      <div className="wp__info__customer">
        <div
          className={
            showBookingHistory
              ? "wp__info__detail hide__detail"
              : "wp__info__detail"
          }
        >
          <div className="info__detail__left">
            <div className="wp__avatar">
              <img
                src="https://i.pinimg.com/736x/c1/83/47/c18347a79ca0be6bfcd34530363cf451.jpg"
                alt="avatar"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="info__detail__right">
            <div className="detail__top__home">
              <span className="title__info__userHome">
                <span className="text__hello"> HELLO</span>{" "}
                {infoUserBooking?.taiKhoan}!
              </span>
              <NavLink to="/updateUser">
                <BiEdit color="#4cb0d8" size="2em" />
              </NavLink>
            </div>
            <div className="detail__bottom__home row">
              <div className="col-md-12 wp__detail__customer">
                <p className="title__info">tài khoản</p>
                <p className="info__rs">{infoUserBooking?.taiKhoan}</p>
              </div>
              <div className="col-md-12 wp__detail__customer">
                <p className="title__info">mật khẩu</p>
                <p className="info__rs">{infoUserBooking?.matKhau}</p>
              </div>
              <div className="col-md-12 wp__detail__customer">
                <p className="title__info">họ tên</p>
                <p className="info__rs">{infoUserBooking?.hoTen}</p>
              </div>
              <div className="col-md-12 wp__detail__customer">
                <p className="title__info">email</p>
                <p className="info__rs">{infoUserBooking?.email}</p>
              </div>
              <div className="col-md-12 wp__detail__customer">
                <p className="title__info">số điện thoại</p>
                <p className="info__rs">{infoUserBooking?.soDT}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            showBookingHistory
              ? "wp__history__booking active__history"
              : "wp__history__booking"
          }
        >
          <div className="table-responsive-sm__fixed">
            <table className="table table__style">
              <thead className="thead-dark">
                <tr>
                  <th className="first__style">Tên phim</th>
                  <th>Thời gian đặt</th>
                  <th>Mã vé</th>
                  <th>Giá vé</th>
                </tr>
              </thead>
              <tbody>{renderListHistoryBooking()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoUser;
