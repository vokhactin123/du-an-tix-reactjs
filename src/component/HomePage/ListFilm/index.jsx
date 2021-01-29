import React from "react";
import FilmItem from "../FilmItem";

function ListFilm(props) {
  let listItemOnOnePage = [];
  let { pageItem, listMovie, totalPage, comingProps } = props;
  console.log(comingProps);
  let firstItem = (pageItem - 1) * 8;
  let finalItem = 8 * pageItem - 1;
  function showListMovieOnEachPage() {
    if (pageItem !== totalPage) {
      for (let i = firstItem; i <= finalItem; i++) {
        // console.log(listMovie[i]);
        listItemOnOnePage.push(
          <FilmItem
            movieItem={listMovie[i]}
            code={i}
            key={i + "keynesad"}
            comingProps={props.comingProps}
          />
        );
      }
    } else {
      for (let i = firstItem; i < listMovie?.length; i++) {
        listItemOnOnePage.push(
          <FilmItem
            movieItem={listMovie[i]}
            key={i + "keyne12344"}
            code={i}
            comingProps={props.comingProps}
          />
        );
      }
    }
    return (
      <div className="row list__filmShowing no-gutters">
        {listItemOnOnePage}
      </div>
    );
  }
  return <>{showListMovieOnEachPage()}</>;
}

export default ListFilm;
