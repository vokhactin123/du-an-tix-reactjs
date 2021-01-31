import React from "react";
import { useSelector } from "react-redux";
import SelectMenuTimeItem from "../SelectMenuTimeItem";
import "./SelectMenuTime.scss";
import format from "date-format";
function getCurrentDay() {
  let dateCurrent = format("yyyy-MM-dd", new Date());
  return dateCurrent;
}
function getTimeCurrent() {
  let timeCurrent = format("hh:mm:ss", new Date());
  return timeCurrent;
}
function SelectMenuTime(props) {
  let listTime = useSelector((state) => {
    return state.SelectMenuReducer.arrLichChieu;
  });
  let filmItem = useSelector((state) => {
    return state.SelectMenuReducer.statusLichChieu;
  });
  let statusDate = useSelector((state) => {
    return state.SelectMenuReducer.statusDate;
  });
  function showListTime(statusDate) {
    console.log(statusDate.toString());
    if (statusDate.toString() !== getCurrentDay().toString()) {
      return listTime?.map((item, index) => {
        return <SelectMenuTimeItem item={item} key={index} />;
      });
    } else {
      let listTimeFilter = listTime?.filter((item) => {
        return (
          format("hh:mm:ss", new Date(item.date)).toString() >
          getTimeCurrent().toString()
        );
      });
      if (listTimeFilter.length > 0) {
        return listTimeFilter?.map((item, index) => {
          return <SelectMenuTimeItem item={item} key={index} />;
        });
      } else {
        return (
          <li className="dropdown-item text-center text__err">
            Không có giờ chiếu
          </li>
        );
      }
    }
  }
  return (
    <div className="dropdown dropdown--fixed wp__CinemaInterest">
      <button
        className=" btn  dropdown-toggle dropdown-toggle--fixed"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="CinemaInterest__movieDropdown">
          {filmItem === null || filmItem === -1 ? "Suất chiếu" : filmItem}
        </span>
        <i className="fas fa-angle-down" />
      </button>
      <ul
        className="dropdown-menu animate slideIn dr-menu--listDate shadow"
        aria-labelledby="dropdownMenuButton"
      >
        {statusDate !== -1 && statusDate !== null ? (
          showListTime(statusDate)
        ) : (
          <li className="dropdown-item text-center text__err">
            vui lòng chọn ngày
          </li>
        )}
      </ul>
    </div>
  );
}

export default SelectMenuTime;
