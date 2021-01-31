import React, { useEffect } from "react";
import "./CheckOutResponsive.scss";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postBookingTicketRq } from "../../../redux/actions/Booking";
function CheckOutResponsive(props) {
  let { page, changePageBack, codeShowTime } = props;
  let dispatch = useDispatch();
  let history = useHistory();
  function handleChangePageBack() {
    changePageBack(false);
  }
  useEffect(() => {
    if (window.innerWidth > 414.4) {
      changePageBack(false);
    }
  });
  let { bookingInfo } = props;
  let listSeatSelected = useSelector((state) => {
    return state.BookingReducer.listSeatSelected;
  });
  let total = useSelector((state) => {
    return state.BookingReducer.total;
  });
  function renderListCodeSeat() {
    if (listSeatSelected) {
      // console.log(listSeatSelected);
      return listSeatSelected.map((item, index) => {
        return <span key={index}>{item.codeSeat} </span>;
      });
    }
  }
  const handleBookingTicket = (e) => {
    let listTickets;
    listTickets = listSeatSelected.map((seat) => ({
      maGhe: seat.maGhe,
      giaVe: seat.giaVe,
    }));
    dispatch(postBookingTicketRq(codeShowTime, listTickets, history));
  };
  return (
    <div
      className="wp__checkOut__responsive__414pxTix"
      style={{ display: page === true ? "block" : "none" }}
    >
      <section className="chooseSeat__header__rp">
        <div className="wp__iconBack">
          <RiArrowLeftSLine
            size="2em"
            color="#cacaca"
            onClick={handleChangePageBack}
          />
        </div>
        <ul className="chooseSeat__header__process__rp">
          <li>2.THANH TOÁN</li>
        </ul>
      </section>
      <section className="wp__checkOut__info__responsive">
        <div className="col-12 px-2">
          <p className="text-center text__checkOut__rp">
            {new Intl.NumberFormat().format(total)}đ
          </p>
        </div>

        <div className="col-12 px-4 margin_Y">
          <p>
            <strong> {bookingInfo?.tenPhim}</strong>
          </p>
          <p>{bookingInfo?.diaChi}</p>
          <p>
            {bookingInfo.ngayChieu} - {bookingInfo.gioChieu} -
            {bookingInfo.tenRap}
          </p>
        </div>

        <div className="col-12 px-4 margin_Y">
          <div className="row">
            <div className="col-8 ">
              <p className="info__seat__choose">{renderListCodeSeat()}</p>
            </div>
            <div className="col-4">
              <p className="sm__text__total__rp">
                {new Intl.NumberFormat().format(total)}đ
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 px-4 margin_Y">
          <p>E-mail</p>
        </div>

        <div className="col-12 px-4">
          <p>Phone</p>
        </div>

        <div className="col-12 px-4 margin_Y">
          <p>Hình thức thanh toán</p>
        </div>

        <div className="ck__info__notification__rp col-12 margin_Y">
          <div className="autoCenter__Bottom__rp">
            <p>
              <img src="../../../../images/exclamation.png" alt="exclamation" />
              Vé đã mua không thể đổi hoặc hoàn tiền
            </p>
            <p>
              Mã vé sẽ được gửi qua tin nhắn <span>ZMS</span>(tin nhắn Zalo) và
              <span>Email</span> đã nhập
            </p>
          </div>
        </div>
      </section>
      <button
        onClick={handleBookingTicket}
        className="btn btn-success btn__checkOut_rp__414px"
      >
        Đặt vé
      </button>
    </div>
  );
}

export default CheckOutResponsive;
