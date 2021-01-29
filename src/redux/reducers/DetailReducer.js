import format from "date-format";
const initialState = {
  infoFilm: null,
  listCinemaSys: [],
  cinemaSysSelected: null,
  showTimeSelected: [],
  minDate: null,
  timeSelected: null,
  ShowTimeBottom: [],
};
function getCurrentDay() {
  let dateCurrent = format("yyyy/MM/dd", new Date());
  return dateCurrent;
}
const DetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_INFO_DETAIL_SUCCESS": {
      let newInfo = { ...action.payload };
      return { ...state, infoFilm: newInfo };
    }
    case "GET_CINEMA_DETAIL_SUCCESS": {
      let listCinema = [...action.payload];
      let cinemaSysSelected = { ...action.payload[0] };
      return { ...state, listCinemaSys: listCinema, cinemaSysSelected };
    }
    case "GET_INFO_SHOW_TIME_BY_ID_LOGO": {
      if (state.infoFilm) {
        console.log("info", state.infoFilm);
        let newInfoFilm = { ...state.infoFilm };

        let arrlichChieu = newInfoFilm?.lichChieu?.map((item, index) => ({
          maLichChieu: item.maLichChieu,
          ngayChieuGioChieu: item.ngayChieuGioChieu,
          thongTinRap: item.thongTinRap,
        }));
        let arrlichChieuTheoHeThong = arrlichChieu.filter((item) => {
          return item.thongTinRap.maHeThongRap === action.payload.maHeThongRap;
        });
        state.showTimeSelected = arrlichChieuTheoHeThong;
      }
      return { ...state, cinemaSysSelected: action.payload };
    }
    case "GET_INFO_FILM_BY_DATE": {
      state.timeSelected = action.payload;
      let filterShowTime = state.showTimeSelected?.filter((item) => {
        return (
          format("yyyy/MM/dd", new Date(item.ngayChieuGioChieu)) ===
          action.payload
        );
      });
      //show time nay co the chua tu 2 rap tro len trong cung he thong vs cung 1 gio chieu
      //lay danh sach cac rap hien chieu o he thong rap nay tai cung thoi gian.
      let listCumRap = filterShowTime?.map((item, index) => {
        return item.thongTinRap.maCumRap;
      });
      listCumRap = listCumRap?.filter((item, index) => {
        return listCumRap.indexOf(item) === index;
      });
      let arrParent = [];
      for (let i = 0; i < listCumRap?.length; i++) {
        let arrChild = [];
        for (let j = 0; j < filterShowTime.length; j++) {
          if (listCumRap[i] === filterShowTime[j].thongTinRap.maCumRap) {
            arrChild.push(filterShowTime[j]);
          }
        }
        arrParent.push(arrChild);
      }
      let infoBottom = [...arrParent];
      return { ...state, ShowTimeBottom: infoBottom };
    }
    case "GET_FIRST_INFO": {
      let arrLichChieuTheoRap = action.payload2?.filter((item) => {
        return item.thongTinRap.maHeThongRap === action.payload1;
      });
      let firstInfoBottom = arrLichChieuTheoRap?.filter((item) => {
        return (
          format("yyyy/MM/dd", new Date(item.ngayChieuGioChieu)) ===
          getCurrentDay()
        );
      });
      let arrChild = [];
      let arrParrent = [];
      for (let i = 0; i < firstInfoBottom?.length; i++) {
        arrChild.push(firstInfoBottom[i]);
        arrParrent.push(arrChild);
      }
      state.ShowTimeBottom = [...arrParrent];
      state.showTimeSelected = arrLichChieuTheoRap;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default DetailReducer;
