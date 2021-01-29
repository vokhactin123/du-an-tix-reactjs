const initialState = {
  CinemaSys: [],
  CinemaSysChoose: null,
  InfoShowTimeEachSys: [],
  CinemaSysSelected: null,
  ListCinemaBrands: [],
  CinemaBrandSelected: null,
  ListFilm: [],
  isLoadingSys: false,
};
const CinemaHome = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CINEMASYS_SUCCESS": {
      let newCinemaSys = [...action.payload];
      return { ...state, CinemaSys: newCinemaSys };
    }
    case "GET_LIST_CINEMA_BRAND_SUCCESS": {
      console.log(action.payload);
      let newListCinemaBrands = [...action.payload];
      let maCumRap = newListCinemaBrands[0].maCumRap;
      // console.log(maCumRap);
      return {
        ...state,
        ListCinemaBrands: newListCinemaBrands,
        CinemaBrandSelected: maCumRap,
      };
    }
    case "GET_INFO_SHOW_TIME_EACH_SYS_SUCCESS": {
      state.CinemaSysChoose = action.payload1;
      // console.log(state.CinemaBrandSelected);
      let film = [];
      if (action.payload[0].maHeThongRap === "BHDStar") {
        if (action.payload.length > 0) {
          let dsCumRap = action.payload[0]?.lstCumRap;
          let index = dsCumRap
            .map((item, index) => {
              return item.maCumRap;
            })
            .indexOf("bhd-star-cineplex-3-2");
          film = [...dsCumRap[index].danhSachPhim];
        }
      } else if (action.payload[0].maHeThongRap === "CGV") {
        if (action.payload.length > 0) {
          let dsCumRap = action.payload[0]?.lstCumRap;
          let index = dsCumRap
            .map((item, index) => {
              return item.maCumRap;
            })
            .indexOf("cgv-aeon-binh-tan");
          film = [...dsCumRap[index].danhSachPhim];
        }
      } else if (action.payload[0].maHeThongRap === "CineStar") {
        if (action.payload.length > 0) {
          let dsCumRap = action.payload[0]?.lstCumRap;
          let index = dsCumRap
            .map((item, index) => {
              return item.maCumRap;
            })
            .indexOf("cns-hai-ba-trung");
          film = [...dsCumRap[index].danhSachPhim];
        }
      } else if (action.payload[0].maHeThongRap === "Galaxy") {
        if (action.payload.length > 0) {
          let dsCumRap = action.payload[0]?.lstCumRap;
          let index = dsCumRap
            .map((item, index) => {
              return item.maCumRap;
            })
            .indexOf("glx-huynh-tan-phat");
          film = [...dsCumRap[index].danhSachPhim];
        }
      } else if (action.payload[0].maHeThongRap === "LotteCinima") {
        if (action.payload.length > 0) {
          let dsCumRap = action.payload[0]?.lstCumRap;
          let index = dsCumRap
            .map((item, index) => {
              return item.maCumRap;
            })
            .indexOf("lotte-cantavil");
          film = [...dsCumRap[index].danhSachPhim];
        }
      } else if (action.payload[0].maHeThongRap === "MegaGS") {
        if (action.payload.length > 0) {
          let dsCumRap = action.payload[0]?.lstCumRap;
          let index = dsCumRap
            .map((item, index) => {
              return item.maCumRap;
            })
            .indexOf("megags-cao-thang");
          film = [...dsCumRap[index].danhSachPhim];
        }
      }
      return {
        ...state,
        InfoShowTimeEachSys: action.payload,
        ListFilm: film,
      };
    }
    case "GET_INFO_SHOW_TIME_EACH_SYS_FAILED": {
      let emptyArrListFilm = [];
      let emptyArrInfoShowTimeEachSys = [];
      return {
        ...state,
        ListFilm: emptyArrListFilm,
        InfoShowTimeEachSys: emptyArrInfoShowTimeEachSys,
      };
    }
    case "GET_LIST_FILM_CINEMA_BRAND_BY_ID":
      {
        if (state.InfoShowTimeEachSys.length > 0) {
          let ListnewCumRap = [...state.InfoShowTimeEachSys];
          let newCumRap = ListnewCumRap[0].lstCumRap?.filter((item, index) => {
            return action.payload === item.maCumRap;
          });
          let film = [];
          let maCumRap = action.payload;
          if (newCumRap.length > 0) {
            film = [...newCumRap[0].danhSachPhim];
            maCumRap = newCumRap[0].maCumRap;
          }
          return { ...state, ListFilm: film, CinemaBrandSelected: maCumRap };
        }
      }
      break;
    default:
      return { ...state };
  }
};
export default CinemaHome;
