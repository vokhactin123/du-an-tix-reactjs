import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import InfoFilmDetail from "../InfoFilmDetail";
import ShowtimeFilmDetail from "../ShowtimeFilmDetail";
import VoteFilmDetail from "../VoteFilmDetail";
import "./BottomContentDetail.scss";
import format from "date-format";
function activeShowtime(active) {
  if (active) {
    return true;
  }
  return false;
}
function BottomContentDetail(props) {
  useEffect(() => {
    activeShowtime(true);
  }, []);
  let active = activeShowtime(true);
  let infoFilm = useSelector((state) => {
    return state.DetailReducer.infoFilm;
  });
  return (
    <div className="bottom_content">
      <div className="wp_info_film">
        <div className="info_film">
          <p className="info_film__content">
            {" "}
            {format("dd-MM-yyyy", new Date(infoFilm?.ngayKhoiChieu))}
          </p>
          <p className="info_film__content">{infoFilm?.tenPhim}</p>
          <p className="info_film__content">91 phút - 0 IMDb - 2D/Digital</p>
        </div>
      </div>
      <nav className="bc_nav__title" id="Id_bc_nav__title">
        <div
          className="nav nav-tabs wp_nav_a clearfix"
          id="nav-tab"
          role="tablist"
        >
          <a
            className="nav-item nav-link"
            id="nav-info-tab"
            data-toggle="tab"
            href="#nav-info"
            role="tab"
          >
            Thông Tin
          </a>
          <a
            className="nav-item nav-link"
            id="nav-evaluate-tab"
            data-toggle="tab"
            href="#nav-evaluate"
            role="tab"
          >
            Đánh Giá
          </a>
          <a
            className={
              active ? `nav-item nav-link active` : `nav-item nav-link`
            }
            id="nav-showTimeDetail-tab"
            data-toggle="tab"
            href="#nav-showTimeDetail"
            role="tab"
          >
            Lịch chiếu
          </a>
          <div className="clearfix" />
        </div>
      </nav>
      <div className="tab-content tab-content--fixed" id="nav-tabContent">
        <InfoFilmDetail />
        <VoteFilmDetail />
        {/* tab 3 */}
        <ShowtimeFilmDetail />
      </div>
    </div>
  );
}
export default BottomContentDetail;
