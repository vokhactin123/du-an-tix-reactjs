import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "./FilmItem.scss";
import { handleReset } from "../../../redux/actions/GetListMovie";
import { getTrailerMovie } from "../../../redux/actions/GetListMovie";
import { openTrailer } from "../../../redux/actions/GetListMovie";
import { GiRoundStar } from "react-icons/gi";
import format from "date-format";
function FilmItem(props) {
  let { movieItem, code, comingProps } = props;
  // console.log(movieItem);
  // console.log(movieItem);
  let dispatch = useDispatch();
  function handleResetCount() {
    dispatch(handleReset(0));
  }
  function getDataTrailer() {
    dispatch(getTrailerMovie(movieItem?.trailer));
    dispatch(openTrailer(false));
  }
  function renderRatingBox() {
    if (comingProps !== "phimSapChieu") {
      return (
        <div className="rating__box">
          10
          <div className="wrapper__star d-flex mb-1 pb-2">
            <GiRoundStar color="yellow" />
            <GiRoundStar color="yellow" />
            <GiRoundStar color="yellow" />
            <GiRoundStar color="yellow" />
            <GiRoundStar color="yellow" />
          </div>
        </div>
      );
    }
  }
  function renderTypeFilm() {
    if (
      code === 2 ||
      (code === 4 && comingProps !== "phimSapChieu" && code !== undefined)
    ) {
      return (
        <div className="wp__type__thumb">
          <img src="./images/film_type_1.png" alt="anh" />
        </div>
      );
    } else if (comingProps === "phimSapChieu" && comingProps !== undefined) {
      return (
        <div className="wp__type__thumb">
          <img src="./images/film_type_3.png" alt="anh" />
        </div>
      );
    }
  }
  function changeColor() {
    if (code % 2 === 0) {
      return true;
    }
    return false;
  }
  function showtimeComingSoon() {
    if (comingProps === "phimSapChieu") {
      return (
        <div className="showtime__box d-flex">
          <span>{format("dd/MM", new Date(movieItem?.ngayKhoiChieu))}</span>
        </div>
      );
    }
  }
  return (
    <React.Fragment>
      <div className="col-md-4 col-lg-3 col-sm-6 col-sm-6--fixed col-6 text-center">
        <div className="film">
          {renderTypeFilm()}
          <div className="wp__link__film">
            {showtimeComingSoon()}
            {renderRatingBox()}
            <NavLink
              to={`/Detail/${movieItem?.maPhim}`}
              className="link__film"
              onClick={handleResetCount}
            >
              <img src={movieItem?.hinhAnh} alt="anh" />
            </NavLink>
            <NavLink
              to={`/Detail/${movieItem?.maPhim}`}
              className="overlay__item"
              onClick={handleResetCount}
            ></NavLink>
            <div className="hoverInfo">
              <button
                type="button"
                data-toggle="modal"
                data-target="#exampleModalCenterHome"
                onClick={getDataTrailer}
              >
                <img src="./images/play-video.png" alt="btn" />
              </button>
            </div>
          </div>

          <div className="info__film text-left">
            <div className="nameFilm">
              <span
                className={
                  changeColor() === true ? "codeFilm color__green" : "codeFilm"
                }
              >
                C{code}
              </span>
              {movieItem?.tenPhim}
            </div>
            <div className="timeFilm">120 phút - {movieItem?.danhGia} IMDb</div>
            <div className="showHover">
              <NavLink
                to={`/Detail/${movieItem?.maPhim}`}
                className="text-white"
                onClick={handleResetCount}
              >
                Mua vé
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FilmItem;
