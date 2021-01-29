const initialState = {
  listMovie: [],
  trailer: null,
  closeTrailer: false,
};
const Movie = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST_MOVIE_SUCCESS": {
      // console.log(action.payload);
      return { ...state, listMovie: action.payload };
    }
    case "GET_TRAILER": {
      return { ...state, trailer: action.payload };
    }
    case "CLOSE_TRAILER": {
      return { ...state, closeTrailer: action.payload };
    }
    case "OPEN_TRAILER": {
      return { ...state, closeTrailer: action.payload };
    }
    default:
      return { ...state };
  }
};
export default Movie;
