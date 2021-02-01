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
  let nameMenu = useSelector((state) => {
    return state.CommonReducer.nameMenu;
  });
  useEffect(() => {
    if (isLoading === false && window.innerWidth > 414.4) {
      if (nameMenu === "Lịch chiếu") {
        window.scrollTo({ top: 700, behavior: "smooth" });
      } else if (nameMenu === "Cụm rạp") {
        window.scrollTo({ top: 1340, behavior: "smooth" });
      } else if (nameMenu === "Ứng dụng") {
        window.scrollTo({ top: 2000, behavior: "smooth" });
      }
    } else if (isLoading === false && window.innerWidth <= 414.4) {
      if (nameMenu === "Lịch chiếu") {
        window.scrollTo({ top: 180, behavior: "smooth" });
      } else if (nameMenu === "Cụm rạp") {
        window.scrollTo({ top: 840, behavior: "smooth" });
      } else if (nameMenu === "Ứng dụng") {
        window.scrollTo({ top: 1460, behavior: "smooth" });
      }
    }
  });
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
