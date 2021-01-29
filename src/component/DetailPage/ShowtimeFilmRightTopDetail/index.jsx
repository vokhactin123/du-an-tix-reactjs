import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShowtimeFilmRightTopDetailItem from "../ShowtimeFilmRightTopDetailItem";
import "./ShowtimeFilmRightTopDetail.scss";
import format from "date-format";
function generateArr() {
  let arr = [];
  for (let i = 0; i <= 14; i++) {
    let date = new Date();
    let finish_date = date.setDate(date.getDate() + i);
    arr.push(format("yyyy/MM/dd", new Date(finish_date)));
  }
  return arr;
}
// console.log(generateArr());
function ShowtimeFilmRightTopDetail(props) {
  let { handleClickResetDayByCinema, activeCinemaFirst } = props;
  let [activeDay, setActiveDay] = useState(0);
  function handleActiveDay(data) {
    setActiveDay(data);
  }
  useEffect(() => {
    if (activeCinemaFirst) {
      setActiveDay(0);
    }
  }, [activeCinemaFirst]);
  let listDate = generateArr();
  function renderListDate() {
    if (listDate) {
      return listDate.map((item, index) => {
        return (
          <ShowtimeFilmRightTopDetailItem
            item={item}
            key={index + "date"}
            activeDay={activeDay === index}
            idxDay={index}
            handleActiveDay={handleActiveDay}
            handleClickResetDayByCinema={handleClickResetDayByCinema}
          />
        );
      });
    }
  }
  return (
    <div className="wp_tabDetailRightTop">
      <ul className="list-unstyled listDate clearfix">{renderListDate()}</ul>
    </div>
  );
}

export default ShowtimeFilmRightTopDetail;
