import React, { useState } from "react";
import { useSelector } from "react-redux";
import ShowtimeFilmLeftDetailItem from "../ShowtimeFilmLeftDetailItem";
import "./ShowtimeFilmLeftDetail.scss";

function ShowtimeFilmLeftDetail(props) {
  let [activeCinemaSys, setActiveCinemaSys] = useState(0);
  let listCinema = useSelector((state) => {
    return state.DetailReducer.listCinemaSys;
  });
  function handleActive(data) {
    setActiveCinemaSys(data);
  }
  function renderListCinema() {
    return listCinema?.map((item, index) => {
      return (
        <ShowtimeFilmLeftDetailItem
          key={index}
          item={item}
          activeCinemaSys={activeCinemaSys === index}
          idx={index}
          handleActive={handleActive}
          handleClickResetDayByCinema={props.handleClickResetDayByCinema}
        />
      );
    });
  }
  return (
    <div className="wp__tabLeftDetailMovie">
      <ul className="tabLeftDetailMenu">{renderListCinema()}</ul>
    </div>
  );
}

export default ShowtimeFilmLeftDetail;
