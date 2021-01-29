import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";
import "./header.scss";
import { GetInfoByLogout } from "../../../redux/actions/User";
import { Link, animateScroll as scroll } from "react-scroll";
import { handleReset } from "../../../redux/actions/GetListMovie";

function Header(props) {
  // console.log(props);
  let currentURL = useRouteMatch();

  let history = useHistory();
  let dispatch = useDispatch();
  let user = useSelector((state) => {
    return state.UserReducer.infoUser;
  });
  function renderUser() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return (
        <div className="info-user">
          <img src="../../../images/anh-dai-dien.png" alt="username" />
          <span className="username ml-1">{user.taiKhoan}</span>
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
    window.localStorage.removeItem("user");
    let user = "";
    dispatch(handleReset(0));
    dispatch(GetInfoByLogout(user));
    history.push("/");
  }
  function handleBackHome() {
    console.log(currentURL);
    if (currentURL !== "/" || currentURL !== "/Home") {
      dispatch(handleReset(0));
    }
    scroll.scrollToTop({ duration: 300, smooth: true });
  }
  return (
    <header className="wp-header">
      <div className="header container-fluid">
        <a className="back_page" href="true">
          <i className="fas fa-chevron-left" />
        </a>
        <a className="back_page" href="true" />
        <div className="header__logo">
          <NavLink exact={true} to="/" onClick={handleBackHome}>
            <img
              src="../../../images/web-logo.png"
              className="img-fluid"
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="header__wp-list-group">
          <ul className="list-unstyled list-item mb-0">
            <li className="item">
              <Link
                activeClass="activeCat"
                to="section1"
                // exact={true}
                // to="/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Lịch chiếu
              </Link>
            </li>
            <li className="item">
              <Link
                activeClass="activeCat"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Cụm rạp
              </Link>
            </li>
            <li className="item">
              <Link
                activeClass="activeCat"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Tin tức
              </Link>
            </li>
            <li className="item">
              <Link
                activeClass="activeCat"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Ứng dụng
              </Link>
            </li>
          </ul>
        </div>
        <div className="header__wp-content">{renderUser()}</div>
        <div
          className="header__menu_dropdown "
          // onclick="showMenu()"
        >
          <i className="fas fa-bars " />
        </div>
      </div>
      <div className="sidebarMenu " id="sidebarDrop">
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
              // onclick="hideMenu()"
            />
          </li>
          <li className="mb-5">
            <a href="true">Lịch chiếu</a>
          </li>
          <li className="mb-5">
            <a href="true">Cụm rạp</a>
          </li>
          <li className="mb-5">
            <a href="true">Tin tức</a>
          </li>
          <li className="mb-5">
            <a href="true">Ứng dụng</a>
          </li>
          <li className="mb-5">
            <a href="true">Hà Nội</a>
          </li>
          <li className="mb-5">
            <a>Đăng xuất</a>
          </li>
        </ul>
      </div>
      <div
        className="overlay"
        id="overlayId"
        // onclick="hideMenuByOverLay()"
      />
    </header>
  );
}

export default Header;
