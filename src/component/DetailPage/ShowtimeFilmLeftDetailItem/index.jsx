import React from "react";
import { useDispatch } from "react-redux";
import "./ShowtimeFilmLeftDetailItem.scss";
import { getInfoShowTimeByIdDetail } from "../../../redux/actions/Detail";
function ShowtimeFilmLeftDetailItem(props) {
  let {
    item,
    activeCinemaSys,
    handleActive,
    idx,
    handleClickResetDayByCinema,
  } = props;
  // console.log(activeCinemaSys);
  let dispatch = useDispatch();
  const handleChangeInfoByIdLogo = () => {
    dispatch(getInfoShowTimeByIdDetail(item));
    handleActive(idx);
    handleClickResetDayByCinema(true);
  };
  return (
    <li
      className={
        activeCinemaSys ? `wp__logoDetail active__cinemaSys` : `wp__logoDetail`
      }
      onClick={handleChangeInfoByIdLogo}
    >
      <div className="wpThumb__detailMovie">
        <img src={item.logo} className="img-fluid" alt="anh" />
      </div>
      <p className="title__detailMovie">{item.tenHeThongRap}</p>
    </li>
  );
}

export default ShowtimeFilmLeftDetailItem;
