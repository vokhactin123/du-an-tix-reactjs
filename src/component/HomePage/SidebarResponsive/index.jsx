import React from "react";
import "./SidebarResponsive.scss";
import { RiSlideshow3Fill } from "react-icons/ri";
import { MdTheaters } from "react-icons/md";
import { MdSettingsApplications } from "react-icons/md";
import { BiNews } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { GetInfoByLogout } from "../../../redux/actions/User";
import { useHistory } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
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
        // dispatch(handleReset(0));
        dispatch(GetInfoByLogout(user));
        history.push("/");
        setHideSidebar(false);
        swal("click to the button", "logout successfully!", "success");
      }
    });
    // window.localStorage.removeItem("user");
    // let user = "";
    // // dispatch(handleReset(0));
    // dispatch(GetInfoByLogout(user));
    // history.push("/");
    // setHideSidebar(false);
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
            <RiSlideshow3Fill size="1.5em" />
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
            <MdTheaters size="1.5em" />
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
            <BiNews size="1.5em" />
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
            <MdSettingsApplications size="1.5em" />
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
            <BiLogOut size="1.5em" />
            <a className="ml-2" onClick={handleLogout}>
              Đăng xuất
            </a>
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
