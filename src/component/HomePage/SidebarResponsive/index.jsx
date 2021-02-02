import React from "react";
import "./SidebarResponsive.scss";
import { RiSlideshow3Fill } from "react-icons/ri";
import { MdTheaters } from "react-icons/md";
import { MdSettingsApplications } from "react-icons/md";
import { BiNews } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { GetInfoByLogout } from "../../../redux/actions/User";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { handleGetNameMenu } from "../../../redux/actions/GetListMovie";
import { handleReset } from "../../../redux/actions/GetListMovie";
import { AiOutlineUser } from "react-icons/ai";

import swal from "sweetalert";
function SidebarResponsive(props) {
  let { activeSidebar, setHideSidebar } = props;
  function HideSidebar() {
    setHideSidebar(false);
  }
  let history = useHistory();
  let dispatch = useDispatch();
  function handleLogout() {
    swal({
      text: "Do you want to logout?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((ress) => {
      if (ress) {
        window.localStorage.removeItem("user");
        let user = "";
        dispatch(GetInfoByLogout(user));
        history.push("/");
        setHideSidebar(false);
        swal("click to the button", "logout successfully!", "success");
      }
    });
  }
  function renderUsername() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return (
        <div className="wp-info-drop">
          <a href="true">
            <img
              src="../../../images/anh-dai-dien.png"
              className="img-fluid"
              alt="anh dai dien"
            />
          </a>
          <span>{user.taiKhoan}</span>
        </div>
      );
    } else {
      return (
        <div className="wp-info-drop">
          <a href="true">
            <img
              src="https://tix.vn/app/assets/img/avatar.png"
              className="img-fluid"
              alt="anh dai dien"
            />
          </a>
          <NavLink
            to="/Login"
            className="username ml-2 avatar__header usernameHome__responsive"
          >
            Đăng nhập
          </NavLink>
        </div>
      );
    }
  }
  function renderLogout() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return (
        <li className="mb-5">
          <BiLogOut size="1.5em" />
          <a href className="ml-3 hover__eff" onClick={handleLogout}>
            Đăng xuất
          </a>
        </li>
      );
    }
  }
  function renderInfo() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return (
        <li className="mb-5">
          <AiOutlineUser size="1.5em" />
          <NavLink
            to="/Info"
            className="ml-3 hover__eff"
            onClick={handleResetCount}
          >
            Info
          </NavLink>
        </li>
      );
    }
  }
  let currentURL = useRouteMatch();
  function handleBackHome(name) {
    console.log(currentURL);
    if (currentURL.url !== "/" || currentURL.url !== "/Home") {
      dispatch(handleReset(0));
      dispatch(handleGetNameMenu(name));
    }
    scroll.scrollToTop({ duration: 300, smooth: true });
  }
  function renderLink(name, pathSection) {
    console.log(currentURL.url);
    if (currentURL.url === "/" || currentURL.url === "/Home") {
      return (
        <Link
          className="ml-3 hover__eff"
          activeClass="activeCat"
          to={pathSection}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={HideSidebar}
        >
          {name}
        </Link>
      );
    } else {
      return (
        <NavLink
          className="ml-3 hover__eff"
          to="/"
          onClick={() => handleBackHome(name)}
        >
          {name}
        </NavLink>
      );
    }
  }
  function handleResetCount() {
    dispatch(handleReset(0));
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
            {renderUsername()}
            <i
              className="fas fa-angle-right"
              id="icon-menudrop"
              onClick={HideSidebar}
            />
          </li>
          <li className="mb-5">
            <RiSlideshow3Fill size="1.5em" />
            {renderLink("Lịch chiếu", "section1")}
          </li>
          <li className="mb-5">
            <MdTheaters size="1.5em" />
            {renderLink("Cụm rạp", "section2")}
          </li>
          <li className="mb-5">
            <BiNews size="1.5em" />
            {renderLink("Tin tức", "section3")}
          </li>
          <li className="mb-5">
            <MdSettingsApplications size="1.5em" />
            {renderLink("Ứng dụng", "section4")}
          </li>
          {renderInfo()}
          {renderLogout()}
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
