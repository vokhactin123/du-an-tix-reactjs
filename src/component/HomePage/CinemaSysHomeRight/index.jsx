import { useSelector } from "react-redux";
import CinemaSysHomeRightItem from "../CinemaSysHomeRightItem";
import "./CinemaSysHomeRight.scss";
import format from "date-format";
function getCurrentDay() {
  let dateCurrent = format("dd/MM/yyyy/hh:mm:ss", new Date());
  return dateCurrent;
}
function generateArrDate(d) {
  if (d !== undefined) {
    let newList = d.split("/");
    return newList;
  }
}
function CinemaSysHomeRight(props) {
  // console.log(generateArrDate(getCurrentDay())[3]);
  let listMovie = useSelector((state) => {
    return state.CinemaHome.ListFilm;
  });
  let inFoShowTimeOfSys = useSelector((state) => {
    return state.CinemaHome.InfoShowTimeEachSys;
  });
  let CinemaBrandSelected = useSelector((state) => {
    return state.CinemaHome.CinemaBrandSelected;
  });
  // console.log(getCurrentDay());
  function ShowListFilmByLogo() {
    if (inFoShowTimeOfSys[0] !== undefined) {
      let listMaCumRap = inFoShowTimeOfSys[0].lstCumRap.map((i, idx) => {
        return i.maCumRap;
      });
      // console.log(listMaCumRap);
      let vitri = listMaCumRap.indexOf(CinemaBrandSelected);
      // console.log(vitri);
      if (vitri === -1) {
        return (
          <p className="error_Home text-center">
            Hiện tại rạp chưa có lịch chiếu!
          </p>
        );
      } else {
        // console.log(listMovie);
        if (listMovie.length > 0) {
          let date = new Date();
          let arrMovie = [];
          for (let i = 0; i < listMovie.length; i++) {
            let listFilmRealTime = listMovie[i].lstLichChieuTheoPhim.filter(
              (item) => {
                return (
                  format(
                    "dd/MM/yyyy",
                    new Date(item.ngayChieuGioChieu)
                  ).toString() ===
                    format("dd/MM/yyyy", new Date(date)).toString() &&
                  format(
                    "hh:mm:ss",
                    new Date(item.ngayChieuGioChieu)
                  ).toString() >= generateArrDate(getCurrentDay())[3].toString()
                );
              }
            );
            if (listFilmRealTime.length > 0) {
              arrMovie.push(listMovie[i]);
            }
          }
          // console.log(listMovie);
          if (arrMovie.length > 0) {
            console.log(arrMovie);
            return arrMovie?.map((item, index) => {
              return <CinemaSysHomeRightItem item={item} key={index} />;
            });
          } else {
            return (
              <p className="error_Home text-center">
                Hiện tại rạp chưa có lịch chiếu!
              </p>
            );
          }
        } else {
          return (
            <p className="error_Home text-center">
              Hiện tại rạp chưa có lịch chiếu!
            </p>
          );
        }
      }
    } else {
      return (
        <p className="error_Home text-center">
          Hiện tại rạp chưa có lịch chiếu!
        </p>
      );
    }
  }
  return <div className="tab__content__filmShow">{ShowListFilmByLogo()}</div>;
}

export default CinemaSysHomeRight;
