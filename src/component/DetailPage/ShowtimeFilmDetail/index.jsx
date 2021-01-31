import React, { useEffect, useRef, useState } from "react";
import "./ShowtimeFilmDetail.scss";
import ShowtimeFilmLeftDetail from "../ShowtimeFilmLeftDetail";
import ShowtimeFilmRightDetail from "../ShowtimeFilmRightDetail";
import { useDispatch, useSelector } from "react-redux";
import { getCinemaSysRequest } from "../../../redux/actions/Detail";
import { getFirstInfoShowTime } from "../../../redux/actions/Detail";
import format from "date-format";
function getCurrentDay() {
  let dateCurrent = format("yyyy/MM/dd", new Date());
  return dateCurrent;
}
function ShowtimeFilmDetail(props) {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCinemaSysRequest());
  }, []);
  let idRap = useSelector((state) => {
    return state.DetailReducer.cinemaSysSelected?.maHeThongRap;
  });
  let timeSelected = useSelector((state) => {
    return state.DetailReducer.timeSelected;
  });
  let infoFilm = useSelector((state) => {
    return state.DetailReducer.infoFilm?.lichChieu;
  });
  console.log(idRap);
  //moi chinh sua
  console.log(timeSelected);
  useEffect(() => {
    if (timeSelected === null || timeSelected === undefined) {
      dispatch(getFirstInfoShowTime(idRap, infoFilm));
    }
  });
  let [activeCinemaFirst, setActiveCinemaFirst] = useState(false);
  function handleClickResetDayByCinema(status) {
    setActiveCinemaFirst(status);
  }
  return (
    <div
      className="tab-pane fade show active container-fluid tab_wp_Showtimes"
      id="nav-showTimeDetail"
      role="tabpanel"
    >
      <div className="wp__tabDetailMovie">
        <ShowtimeFilmLeftDetail
          handleClickResetDayByCinema={handleClickResetDayByCinema}
        />
        <ShowtimeFilmRightDetail
          handleClickResetDayByCinema={handleClickResetDayByCinema}
          activeCinemaFirst={activeCinemaFirst}
        />
      </div>
    </div>
  );
}

export default React.memo(ShowtimeFilmDetail);
