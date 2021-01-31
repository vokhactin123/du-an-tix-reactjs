import React from "react";
import "./SidebarResponsive.scss";
import { RiSlideshow3Fill } from "react-icons/ri";
import { MdTheaters } from "react-icons/md";
import { MdSettingsApplications } from "react-icons/md";
import { BiNews } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { GetInfoByLogout } from "../../../redux/actions/User";
import { useHistory } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
function SidebarResponsive(props) {
  let { activeSidebar, setHideSidebar } = props;
  function HideSidebar() {
    setHideSidebar(false);
  }
  let history = useHistory();
  let dispatch = useDispatch();
  function handleLogout() {
    window.localStorage.removeItem("user");
    let user = "";
    // dispatch(handleReset(0));
    dispatch(GetInfoByLogout(user));
    history.push("/");
    setHideSidebar(false);
  }
  return (
    <React.Fragment>
      <div
        className={
          activeSidebar ? `sidebarMenu active__sidebarHeader` : `sidebarMenu `
        }
        id="sidebarDrop"
      >
        <ul className="list-unstyled list-dropdown">
          <li className="mb-5 mt-3">
            <div className="wp-info-drop">
              <a href="true">
                <img
                  src="../../../images/anh-dai-dien.png"
                  className="img-fluid"
                  alt="anh dai dien"
                />
              </a>
              <span>Võ Khắc Tín</span>
            </div>
            <i
              className="fas fa-angle-right"
              id="icon-menudrop"
              onClick={HideSidebar}
            />
          </li>
          <li className="mb-5">
            <RiSlideshow3Fill size="2em" />
            <Link
              className="ml-2"
              activeClass="activeCat"
              to="section1"
              // exact={true}
              // to="/"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={HideSidebar}
            >
              Lịch chiếu
            </Link>
          </li>
          <li className="mb-5">
            <MdTheaters size="2em" />
            <Link
              className="ml-2"
              activeClass="activeCat"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={HideSidebar}
            >
              Cụm rạp
            </Link>
          </li>
          <li className="mb-5">
            <BiNews size="2em" />
            <Link
              className="ml-2"
              activeClass="activeCat"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={HideSidebar}
            >
              Tin tức
            </Link>
          </li>
          <li className="mb-5">
            <MdSettingsApplications size="2em" />
            <Link
              className="ml-2"
              activeClass="activeCat"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={HideSidebar}
            >
              Ứng dụng
            </Link>
          </li>
          <li className="mb-5">
            <a onClick={handleLogout}>Đăng xuất</a>
          </li>
        </ul>
      </div>
      <div
        className={activeSidebar ? "overlay active__overlay" : "overlay"}
        id="overlayId"
        onClick={HideSidebar}
      />
    </React.Fragment>
  );
}

export default SidebarResponsive;
