import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";
import "./header.scss";
import { GetInfoByLogout } from "../../../redux/actions/User";
import { Link, animateScroll as scroll } from "react-scroll";
import { handleReset } from "../../../redux/actions/GetListMovie";
import SidebarResponsive from "../SidebarResponsive";
import swal from "sweetalert";
import { handleGetNameMenu } from "../../../redux/actions/GetListMovie";
function Header(props) {
  let currentURL = useRouteMatch();
  console.log(currentURL);
  let [showSidebar, setShowSidebar] = useState(false);
  let history = useHistory();
  let dispatch = useDispatch();
  function handleResetCount() {
    dispatch(handleReset(0));
  }
  function renderUser() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return (
        <div className="info-user">
          <img src="../../../images/anh-dai-dien.png" alt="username" />
          <span className="username ml-1">
            <NavLink to="/Info" onClick={handleResetCount}>
              {user.taiKhoan}
            </NavLink>{" "}
          </span>
          <div className="info-user__logout" onClick={handleLogout}>
            Đăng xuất
          </div>
        </div>
      );
    } else {
      return (
        <div className="info-user">
          <img src="../../../images/avatar.png" alt="username" />
          <NavLink to="/Login" className="username ml-1 avatar__header">
            Đăng nhập
          </NavLink>
        </div>
      );
    }
  }
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
        // dispatch(handleReset(0));
        dispatch(GetInfoByLogout(user));
        history.push("/");
        setHideSidebar(false);
        swal("click to the button", "logout successfully!", "success");
      }
    });
  }
  function handleBackHome(name) {
    console.log(currentURL);
    if (currentURL.url !== "/" || currentURL.url !== "/Home") {
      dispatch(handleReset(0));
      dispatch(handleGetNameMenu(name));
    }
    scroll.scrollToTop({ duration: 300, smooth: true });
  }
  function showMenuResponsive() {
    setShowSidebar(true);
  }
  function animationSidebar(showSidebar) {
    return showSidebar;
  }
  function setHideSidebar(data) {
    setShowSidebar(data);
  }
  useEffect(() => {
    if (showSidebar) {
      animationSidebar(showSidebar);
    }
  });
  function handleBackHomeTix() {
    dispatch(handleReset(0));
    history.push("/");
  }
  function renderArrowBack() {
    if (currentURL.url !== "/" && currentURL.url !== "/Home") {
      return (
        <Link className="back_page" to="/" onClick={handleBackHomeTix}>
          <i className="fas fa-chevron-left" />
        </Link>
      );
    }
  }
  function renderLink(name, pathSection) {
    console.log(currentURL.url);
    if (currentURL.url === "/" || currentURL.url === "/Home") {
      return (
        <Link
          activeClass="activeCat"
          to={pathSection}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {name}
        </Link>
      );
    } else {
      return (
        <NavLink to="/" onClick={() => handleBackHome(name)}>
          {name}
        </NavLink>
      );
    }
  }
  renderLink();
  return (
    <header className="wp-header">
      <div className="header container-fluid">
        {renderArrowBack()}
        <div className="header__logo">
          <NavLink exact={true} to="/" onClick={() => handleBackHome("")}>
            <img
              src="../../../images/web-logo.png"
              className="img-fluid"
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="header__wp-list-group">
          <ul className="list-unstyled list-item mb-0">
            <li className="item">{renderLink("Lịch chiếu", "section1")}</li>
            <li className="item">{renderLink("Cụm rạp", "section2")}</li>
            <li className="item">{renderLink("Tin tức", "section3")}</li>
            <li className="item">{renderLink("Ứng dụng", "section4")}</li>
          </ul>
        </div>
        <div className="header__wp-content">{renderUser()}</div>
        <div className="header__menu_dropdown " onClick={showMenuResponsive}>
          <i className="fas fa-bars " />
        </div>
      </div>
      <SidebarResponsive
        setHideSidebar={setHideSidebar}
        activeSidebar={
          animationSidebar(showSidebar) ? animationSidebar(showSidebar) : ""
        }
      />
    </header>
  );
}

export default Header;
