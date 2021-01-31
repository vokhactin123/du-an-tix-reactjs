import React, { useEffect } from "react";
import TabFilmComingSoon from "../TabFilmComingSoon";
import TabFilmShowing from "../TabFilmShowing";
import "./ListTabFilm.scss";
import { GetListMovieRequest } from "../../../redux/actions/GetListMovie";
import { useDispatch, useSelector } from "react-redux";
import format from "date-format";
function compareMonthYearDateFilmShowing(
  month1,
  year1,
  date1,
  monthCurrent,
  yearCurrent,
  dateCurrent,
  monthFinish,
  yearFinish,
  dateFinish
) {
  if (year1 < yearCurrent) {
    return false;
  } else if (year1 > yearCurrent && year1 === yearFinish) {
    if (month1 === monthCurrent) {
      return false;
    } else if (month1 > monthCurrent) {
      return false;
    } else {
      if (month1 > monthFinish) {
        return false;
      } else if (month1 < monthFinish) {
        return true;
      } else {
        if (date1 < dateFinish) {
          return true;
        } else {
          return false;
        }
      }
    }
  } else if (year1 > yearCurrent && year1 > yearFinish) {
    return false;
  } else if (year1 === yearCurrent) {
    if (month1 > monthCurrent && month1 === monthFinish) {
      if (date1 < dateFinish) {
        return true;
      }
    } else if (month1 > monthCurrent && month1 > monthFinish) {
      return false;
    } else if (month1 < monthCurrent) {
      return false;
    } else if (month1 === monthCurrent && month1 < monthFinish) {
      if (date1 >= dateCurrent) {
        return true;
      } else {
        return false;
      }
    } else if (month1 === monthCurrent && month1 === monthFinish) {
      if (date1 >= dateCurrent && date1 < dateFinish) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function compareMonthYearDateFilmComingSoon(
  month1,
  year1,
  date1,
  monthFinish,
  yearFinish,
  dateFinish
) {
  if (year1 > yearFinish) {
    return true;
  } else if (year1 < yearFinish) {
    return false;
  } else {
    if (month1 > monthFinish) {
      return true;
    } else if (month1 < monthFinish) {
      return false;
    } else {
      if (date1 > dateFinish) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function getFinishDay() {
  let date = new Date();
  let finish_date = date.setDate(date.getDate() + 14);
  finish_date = format("dd/MM/yyyy", new Date(finish_date));
  return finish_date;
}
function getCurrentDay() {
  let dateCurrent = format("dd/MM/yyyy", new Date());
  return dateCurrent;
}
function generateArrDate(d) {
  if (d !== undefined) {
    let newList = d.split("/");
    return newList;
  }
}
function ListTabFilm(props) {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetListMovieRequest());
  }, []);
  let listMovie = useSelector((state) => {
    return state.Movie.listMovie;
  });
  function getFilmShowing() {
    let newListMovie = [...listMovie];
    return newListMovie.filter((item) => {
      return compareMonthYearDateFilmShowing(
        format("MM", new Date(item.ngayKhoiChieu)).toString(),
        format("yyyy", new Date(item.ngayKhoiChieu)).toString(),
        format("dd", new Date(item.ngayKhoiChieu)).toString(),
        generateArrDate(getCurrentDay())[1].toString(),
        generateArrDate(getCurrentDay())[2].toString(),
        generateArrDate(getCurrentDay())[0].toString(),
        generateArrDate(getFinishDay())[1].toString(),
        generateArrDate(getFinishDay())[2].toString(),
        generateArrDate(getFinishDay())[0].toString()
      );
    });
  }
  function getFilmComingSoon() {
    let newListMovie = [...listMovie];
    return newListMovie.filter((item) => {
      return compareMonthYearDateFilmComingSoon(
        format("MM", new Date(item.ngayKhoiChieu)).toString(),
        format("yyyy", new Date(item.ngayKhoiChieu)).toString(),
        format("dd", new Date(item.ngayKhoiChieu)).toString(),
        generateArrDate(getFinishDay())[1].toString(),
        generateArrDate(getFinishDay())[2].toString(),
        generateArrDate(getFinishDay())[0].toString()
      );
    });
  }
  // function generateArr() {
  //   let date = new Date();
  //   let arr = [];
  //   for (let i = 0; i <= 21; i++) {
  //     let date = new Date();
  //     let finish_date = date.setDate(date.getDate() + i);
  //     arr.push(format("dd/MM/yyyy", new Date(finish_date)));
  //   }
  //   return arr;
  // }
  // console.log(generateArr());
  return (
    <div className="wrapper__ContentListFilmTix" id="section1">
      <section className="wp__filmListNav">
        <ul className="nav nav-tabs nav__tabListFilm" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="showing-tab"
              data-toggle="tab"
              href="#Showing"
              role="tab"
            >
              Đang chiếu
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="coming-tab"
              data-toggle="tab"
              href="#ComingSoon"
              role="tab"
            >
              Sắp chiếu
            </a>
          </li>
        </ul>
        <div
          className="tab-content wp__tab__content container-fluid container-fluid--fixed"
          id="myTabContent"
        >
          <TabFilmShowing listMovie={getFilmShowing()} />
          <TabFilmComingSoon listMovie={getFilmComingSoon()} />
        </div>
      </section>
    </div>
  );
}

export default ListTabFilm;
