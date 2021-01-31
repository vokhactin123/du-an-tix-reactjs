// import React from "react";
// import ListSessionHomeRightItem from "../ListSessionHomeRightItem";
// import format from "date-format";
// function ListSessionHomeRight(props) {
//   let { lstLichChieu } = props;
//   // console.log(lstLichChieu);
//   function showLichChieuFilm() {
//     console.log(lstLichChieu);
//     let date = new Date();
//     lstLichChieu = lstLichChieu?.filter((item) => {
//       return (
//         format("dd/MM/yyyy", new Date(item.ngayChieuGioChieu)) >=
//         format("dd/MM/yyyy", date)
//       );
//     });
//     console.log(lstLichChieu);
//     if (lstLichChieu.length > 0) {
//       return lstLichChieu?.map((item, index) => {
//         return <ListSessionHomeRightItem item={item} key={index} />;
//       });
//     }
//   }
//   return <div className="list__session__filmShow">{showLichChieuFilm()}</div>;
// }

// export default ListSessionHomeRight;
