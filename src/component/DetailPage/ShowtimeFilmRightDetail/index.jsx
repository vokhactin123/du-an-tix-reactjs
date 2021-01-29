import React from "react";
import ShowtimeFilmRightBottomDetail from "../ShowtimeFilmRightBottomDetail";
import ShowtimeFilmRightTopDetail from "../ShowtimeFilmRightTopDetail";
import "./ShowtimeFilmRightDetail.scss";
function ShowtimeFilmRightDetail(props) {
  let { handleClickResetDayByCinema, activeCinemaFirst } = props;
  // console.log(props.handleClickResetDayByCinema());
  // console.log(handleClickResetDayByCinemaSys(0));
  function renderShowTimeByLogo() {
    return (
      <div className="wp__tabRightDetailMovie">
        <ShowtimeFilmRightTopDetail
          handleClickResetDayByCinema={handleClickResetDayByCinema}
          activeCinemaFirst={activeCinemaFirst}
        />
        <ShowtimeFilmRightBottomDetail />
      </div>
    );
  }
  return <React.Fragment>{renderShowTimeByLogo()}</React.Fragment>;
}

export default ShowtimeFilmRightDetail;
