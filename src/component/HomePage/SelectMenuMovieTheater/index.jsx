import React from "react";
import { useSelector } from "react-redux";
import SelectMenuMovieTheaterItem from "../SelectMenuMovieTheaterItem";
import "./SelectMenuMovieTheater.scss";
import format from "date-format";
function getCurrentDay() {
  let dateCurrent = format("dd/MM/yyyy", new Date());
  return dateCurrent;
}
function generateArrDate(d) {
  if (d !== undefined) {
    let newList = d.split("/");
    return newList;
  }
}
function compareWithDateCurrent(d1, m1, y1, dCurrent, mCurrent, yCurrent) {
  if (y1 < yCurrent) {
    return false;
  } else if (y1 > yCurrent) {
    return true;
  } else {
    if (m1 < mCurrent) {
      return false;
    } else if (m1 > mCurrent) {
      return true;
    } else {
      if (d1 >= dCurrent) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function SelectMenuMovieTheater(props) {
  let listCinemaTheater = useSelector((state) => {
    return state.SelectMenuReducer.CinemaSystem;
  });
  let statusCinemaTheater = useSelector((state) => {
    return state.SelectMenuReducer.statusCinemaSystem;
  });
  let statusFilm = useSelector((state) => {
    return state.SelectMenuReducer.statusFilm;
  });
  let CumRapArr = [];
  if (listCinemaTheater.heThongRapChieu !== undefined) {
    let CumRapChieu = listCinemaTheater.heThongRapChieu.map((item, index) => {
      return item.cumRapChieu;
    });
    // console.log(CumRapChieu);
    for (let i = 0; i < CumRapChieu.length; i++) {
      // console.log("cum rap thu" + i, CumRapChieu[i]);
      // console.log("cum rap thu" + i, CumRapChieu[i]);
      for (let j = 0; j < CumRapChieu[i].length; j++) {
        // console.log(CumRapChieu[i][j]);
        //kiểm tra xem thử cái rạp nào mà có danh sách lịch chiếu === 0 ( tức có ngày chiếu giờ chiếu nhỏ hơn hoặc bằng ngày hiện tại)
        //thì ta không push cái tên rạp đó vô mảng các rạp đang chiếu, nếu rạp nào có danh sách lịch chiếu lớn hơn 0 thì ta push cái rạp
        //đó vô mảng các rạp có lịch chiếu phim.
        let listLichChieu = CumRapChieu[i][j].lichChieuPhim.filter((item) => {
          return compareWithDateCurrent(
            format("dd", new Date(item.ngayChieuGioChieu)).toString(),
            format("MM", new Date(item.ngayChieuGioChieu)).toString(),
            format("yyyy", new Date(item.ngayChieuGioChieu)).toString(),
            generateArrDate(getCurrentDay())[0].toString(),
            generateArrDate(getCurrentDay())[1].toString(),
            generateArrDate(getCurrentDay())[2].toString()
          );
        });
        if (listLichChieu.length > 0) {
          CumRapArr.push(CumRapChieu[i][j].tenCumRap);
        }
      }
      // CumRapChieu[i].map((item, index) => {
      //   CumRapArr.push(item.tenCumRap);
      // });
    }
  }
  function ShowListCumRapChieu() {
    if (CumRapArr !== undefined && CumRapArr.length > 0) {
      //   console.log(CumRapArr);
      return CumRapArr.map((item, index) => {
        return <SelectMenuMovieTheaterItem item={item} key={index} />;
      });
    } else {
      //truong hop rap co phim nhung phim da chieu roi.
      return (
        <li className="dropdown-item text-center text__err">
          phim chưa có rạp chiếu
        </li>
      );
    }
  }
  return (
    <div className="dropdown dropdown--fixed wp__movieTheaterDropdown">
      <button
        className=" btn  dropdown-toggle dropdown-toggle--fixed"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="theater__movieDropdown">
          {statusCinemaTheater === null || statusCinemaTheater === -1
            ? "Rạp"
            : statusCinemaTheater}
        </span>
        <i className="fas fa-angle-down" />
      </button>
      <ul
        className="dropdown-menu animate slideIn dr-menu--listTheater shadow"
        aria-labelledby="dropdownMenuButton"
      >
        {statusFilm !== null && statusFilm !== -1 ? (
          ShowListCumRapChieu()
        ) : (
          <li className="dropdown-item text-center text__err">
            vui lòng chọn phim
          </li>
        )}
      </ul>
    </div>
  );
}
export default SelectMenuMovieTheater;
