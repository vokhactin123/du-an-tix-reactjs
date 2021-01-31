import React from "react";
import format from "date-format";
function getTimeCurrent() {
  let timeCurrent = format("hh:mm", new Date());
  return timeCurrent;
}
function ListSessionHomeRightItem(props) {
  let { item } = props;
  let TimeEnd;
  if (item !== undefined) {
    TimeEnd = parseInt(format("hh", new Date(item.ngayChieuGioChieu))) + 2;
  }
  function setDisable() {
    if (item !== undefined) {
      if (
        format("hh:mm", new Date(item?.ngayChieuGioChieu)) < getTimeCurrent()
      ) {
        return false;
      }
      return true;
    }
  }
  return (
    <a
      className={
        setDisable()
          ? `session__filmShow__item`
          : `list__session__filmShow__disabled session__filmShow__item`
      }
    >
      <a href={`/Booking/${item.maLichChieu}`} target="_blank">
        {format("hh:mm", new Date(item?.ngayChieuGioChieu))}
      </a>
      ~{TimeEnd + format(":mm", new Date(item?.ngayChieuGioChieu))}
    </a>
  );
}

export default ListSessionHomeRightItem;
