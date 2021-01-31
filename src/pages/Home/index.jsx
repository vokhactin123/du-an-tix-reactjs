import React, { useEffect } from "react";
import Banner from "../../component/HomePage/Banner";
import SelectMenu from "../../component/HomePage/SelectMenu";
import ListTabFilm from "../../component/HomePage/ListTabFilm";
import "./home.scss";
import CinemaSysHome from "../../component/HomePage/CinemaSysHome";
import Application from "../../component/HomePage/Application";
import { useSelector } from "react-redux";
import Loading from "../../component/Loading";
import ModalHome from "../../component/HomePage/ModalHome";
function Home(props) {
  let isLoading = useSelector((state) => {
    return state.CommonReducer.isLoading;
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let closeTrailer = useSelector((state) => {
    return state.Movie.closeTrailer;
  });
  function renderHome() {
    return (
      <div className="wrapper" id="wp-content">
        {isLoading ? <Loading /> : ""}
        <Banner />
        <SelectMenu />
        <ListTabFilm />
        {closeTrailer ? "" : <ModalHome />}
        <CinemaSysHome />
        <Application />
      </div>
    );
  }
  return <React.Fragment>{renderHome()}</React.Fragment>;
}
export default Home;
