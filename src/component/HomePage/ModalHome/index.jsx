import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ModalHome.scss";
import { closeTrailer } from "../../../redux/actions/GetListMovie";
function ModalHome(props) {
  let dispatch = useDispatch();
  let trailer = useSelector((state) => {
    return state.Movie.trailer;
  });
  function handleCloseTrailer() {
    dispatch(closeTrailer(true));
  }
  let [heightVideo, setHeightVideo] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 414.4) {
      setHeightVideo(true);
    }
  });
  return (
    <div
      className="modal modal--fixedHome fade"
      id="exampleModalCenterHome"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg w-100 modal-dialog--fixedHome"
        role="document"
      >
        <div className="modal-content modal-content--fixedHome">
          <div className="modal-body modal-body--fixed">
            <button
              onClick={handleCloseTrailer}
              type="button"
              className="btn_close close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <img src="../../../images/close.png" alt="close" />
            </button>
            <iframe
              title="frameHome"
              width="100%"
              height={heightVideo ? 550 : 250}
              src={trailer ? trailer : ""}
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ModalHome);
