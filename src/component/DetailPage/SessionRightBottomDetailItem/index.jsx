import React from "react";
import "./SessionRightBottomDetailItem.scss";
import format from "date-format";
function SessionRightBottomDetailItem(props) {
  let { item } = props;
  let TimeEnd;
  if (item !== undefined) {
    TimeEnd = parseInt(format("hh", new Date(item.ngayChieuGioChieu))) + 2;
  }
  return (
    <a className="item_sessionDetailShowTimes" href="#">
      <a target="_blank" href={`/Booking/${item?.maLichChieu}`}>
        {format("hh:mm", new Date(item?.ngayChieuGioChieu))}
      </a>
      ~{TimeEnd + format(":mm", new Date(item?.ngayChieuGioChieu))}
    </a>
  );
}

export default SessionRightBottomDetailItem;
