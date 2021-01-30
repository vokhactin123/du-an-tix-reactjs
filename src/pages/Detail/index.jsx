import React, { useEffect } from "react";
import BottomContentDetail from "../../component/DetailPage/BottomContentDetail";
import TopContentDetail from "../../component/DetailPage/TopContentDetail";
import "./Detail.scss";
import { useDispatch, useSelector } from "react-redux";
import { getInfoDetailFilmRequest } from "../../redux/actions/Detail";
import { useParams } from "react-router-dom";
import Loading from "../../component/Loading";
function Detail(props) {
  // console.log(props);
  let dispatch = useDispatch();
  let { idFilm } = useParams();
  // console.log(idFilm);
  useEffect(() => {
    if (idFilm) {
      dispatch(getInfoDetailFilmRequest(idFilm));
      window.scrollTo(0, 0);
    }
  }, []);
  let isLoading = useSelector((state) => {
    return state.CommonReducer.isLoading;
  });
  function renderDetail() {
    return (
      <section className="content">
        {isLoading ? <Loading /> : ""}
        <TopContentDetail />
        <BottomContentDetail />
      </section>
    );
  }
  return <React.Fragment>{renderDetail()}</React.Fragment>;
}
export default Detail;
