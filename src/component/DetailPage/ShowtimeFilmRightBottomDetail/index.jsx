import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowtimeFilmRightBottomDetailItem from "../ShowtimeFilmRightBottomDetailItem";
import "./ShowtimeFilmRightBottomDetail.scss";
import { showInfoFilmByDate } from "../../../redux/actions/Detail";
function ShowtimeFilmRightBottomDetail(props) {
  let dispatch = useDispatch();
  let date = useSelector((state) => {
    return state.DetailReducer.minDate;
  });
  let infoBottom = useSelector((state) => {
    return state.DetailReducer.ShowTimeBottom;
  });
  let cinemaSysSelected = useSelector((state) => {
    return state.DetailReducer.cinemaSysSelected;
  });
  useEffect(() => {
    dispatch(showInfoFilmByDate(date));
  }, [date]);
  useEffect(() => {
    if (cinemaSysSelected) {
      dispatch(showInfoFilmByDate(date));
    }
  }, [cinemaSysSelected?.maHeThongRap]);
  const renderInfoBottom = () => {
    if (infoBottom?.length > 0 && infoBottom[0]?.length > 0) {
      return infoBottom.map((item, index) => {
        return (
          <ShowtimeFilmRightBottomDetailItem
            item={item}
            key={index + "infoBottom"}
          />
        );
      });
    } else {
      return (
        <p className="text-center error__Detail">
          Hiện tại ngày này chưa có lịch chiếu!
        </p>
      );
    }
  };
  return (
    <div className="wp_tabDetailRightBottom">
      <div className="list_detailInfo">
        {/* end item 1 */}
        {renderInfoBottom()}
      </div>
    </div>
  );
}
export default ShowtimeFilmRightBottomDetail;
