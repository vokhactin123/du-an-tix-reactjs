import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CinemaSysHomeMiddleItem from "../CinemaSysHomeMiddleItem";
import "./CinemaSysHomeMiddle.scss";
function listThumbCinemaSysByCinemaSelected(CinemaSysSelected) {
  if (CinemaSysSelected !== undefined) {
    switch (CinemaSysSelected) {
      case "BHDStar": {
        let listCinemaBHD = [
          "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
          "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-vincom-thao-dien-16105955634183.png",
          "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-vincom-3-2-16105957596860.png",
          "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-pham-hung-16105959230642.png",
          "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-vincom-quang-trung-16105960645760.png",
          "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-vincom-le-van-viet-16105962051265.png",
        ];
        return listCinemaBHD;
      }
      case "CGV": {
        let listCinemaCGV = [
          "https://images.foody.vn/res/g26/250810/s214x214/foody-cgv-cinemas-aeon-mall-binh-tan-576-636117411437466711.jpg",
          "https://lofficiel.vn/wp-content/uploads/2020/12/cgv.jpg",
          "https://images.foody.vn/res/g5/47198/s180x180/foody-cgv-cinemas-crescent-mall-426-637397652504216802.jpg",
          "https://vietnamtimes.org.vn/stores/news_dataimages/phuonglyvnt/062020/09/17/amp_img/2652_cj_business_korea.png",
          "https://vietnamtimes.org.vn/stores/news_dataimages/phuonglyvnt/062020/09/17/amp_img/2652_cj_business_korea.png",
          "https://lofficiel.vn/wp-content/uploads/2020/12/cgv.jpg",
          "https://lofficiel.vn/wp-content/uploads/2020/12/cgv.jpg",
          "https://media.diadiem247.com/uploads/w900/2019/03/13/cgv-hung-vuong-plaza-6364745448305638245c886f3e0447e.jpg",
          "https://fastly.4sqi.net/img/general/600x600/25617797_vUL3cxgcWjSZCjEkKGvZ99chYFZbO81kAiaVxNtasnA.jpg",
          "https://fastly.4sqi.net/img/general/600x600/25617797_vUL3cxgcWjSZCjEkKGvZ99chYFZbO81kAiaVxNtasnA.jpg",
          "https://kenhhomestay.com/wp-content/uploads/2019/12/cgv-crescent-mall-3.jpg",
          "https://genk.mediacdn.vn/2014/1-aboutcgv-celadon-1389333156986.jpg",
          "https://kenhhomestay.com/wp-content/uploads/2019/12/cgv-crescent-mall-3.jpg",
          "https://kenhhomestay.com/wp-content/uploads/2019/12/cgv-crescent-mall-3.jpg",
          "https://kenhhomestay.com/wp-content/uploads/2019/12/cgv-crescent-mall-3.jpg",
          "https://kenhhomestay.com/wp-content/uploads/2019/12/cgv-crescent-mall-3.jpg",
          "https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg",
          "https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg",
          "https://vietnamtimes.org.vn/stores/news_dataimages/phuonglyvnt/062020/09/17/amp_img/2652_cj_business_korea.png",
          "https://images.foody.vn/res/g26/250817/s285x285/foody-cgv-cinemas-liberty-hoang-van-thu-820-637011068867013269.jpg",
          "https://images.foody.vn/res/g26/250817/s285x285/foody-cgv-cinemas-liberty-hoang-van-thu-820-637011068867013269.jpg",
        ];
        return listCinemaCGV;
      }
      case "CineStar": {
        let listCinemaCineStar = [
          "https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg",
          "https://s3img.vcdn.vn/123phim/2018/09/cinestar-quoc-thanh-15379636956745.jpg",
        ];
        return listCinemaCineStar;
      }
      case "Galaxy": {
        let listCinemaGalaxy = [
          "https://fastly.4sqi.net/img/general/600x600/29604702_K3GOvC8lhGnhzoV7ZnLnKQ-pBf5WdM2mw-fpSeKAkis.jpg",
          "https://fastly.4sqi.net/img/general/200x200/FZ01XRXB3V03ZR1JBNKCH0ELMOLL10AEZOU2URLB5E5VDKYK.jpg",
          "https://fastly.4sqi.net/img/general/600x600/141463541_oNwwD1vOSiOiy_vEhJ066F75ByDIwvfFXc1Z5L-8eAU.jpg",
          "https://fastly.4sqi.net/img/general/200x200/FZ01XRXB3V03ZR1JBNKCH0ELMOLL10AEZOU2URLB5E5VDKYK.jpg",
          "https://s3img.vcdn.vn/123phim/2018/09/galaxy-nguyen-du-15379627642564.jpg",
          "https://fastly.4sqi.net/img/general/600x600/141463541_oNwwD1vOSiOiy_vEhJ066F75ByDIwvfFXc1Z5L-8eAU.jpg",
          "https://static.hotdeal.vn/images/422/421542/500x500/80801-he-thong-rap-chieu-phim-galaxy-cinema.jpg",
          "https://s3img.vcdn.vn/123phim/2018/09/galaxy-nguyen-du-15379627642564.jpg",
        ];
        return listCinemaGalaxy;
      }
      case "LotteCinima": {
        let listCinemaLotteCinima = [
          "https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-cantavil-15383866510260.jpg",
          "https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-cong-hoa-15383860949090.jpg",
          "https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-cong-hoa-15383860949090.jpg",
          "https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-go-vap-15383873960955.jpg",
          "https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-nam-sai-gon-15383867312967.jpg",
          "https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-nam-sai-gon-15383867312967.jpg",
          "https://placevietnam.com/img/full/binh_luan/18/lotte-cinema-lotte-mart-can-tho-1535505119-4120.jpg",
          "https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-thu-duc-15383864347748.jpg",
        ];
        return listCinemaLotteCinima;
      }
      case "MegaGS": {
        let listCinemaMegaGS = [
          "https://s3img.vcdn.vn/123phim/2018/09/mega-gs-cao-thang-15380164745357.jpg",
        ];
        return listCinemaMegaGS;
      }
      default:
        break;
    }
  }
}
function CinemaSysHomeMiddle(props) {
  // console.log(activeCumRap1);
  let [activeIdxBrand, setActiveIdxBrand] = useState(0);
  // console.log(activeIdxBrand);
  let listCinemaBrands = useSelector((state) => {
    return state.CinemaHome.ListCinemaBrands;
  });
  let CinemaSysSelected = useSelector((state) => {
    return state.CinemaHome.CinemaSysChoose;
  });
  console.log(CinemaSysSelected);

  console.log(listThumbCinemaSysByCinemaSelected(CinemaSysSelected));
  function setActiveBrand(idx) {
    setActiveIdxBrand(idx);
  }
  // console.log(props.activeRap1);
  useEffect(() => {
    if (props.activeRap1 === true) {
      setActiveBrand(0);
    }
  });
  function ShowListCinemaSysBrand() {
    if (listCinemaBrands.length > 0) {
      return listCinemaBrands?.map((item, index) => {
        return (
          <CinemaSysHomeMiddleItem
            idx={index}
            item={item}
            key={index}
            propsThumb={
              listThumbCinemaSysByCinemaSelected(CinemaSysSelected)
                ? listThumbCinemaSysByCinemaSelected(CinemaSysSelected)[index]
                : ""
            }
            active={activeIdxBrand === index}
            setActiveBrand={setActiveBrand}
            setTrangThai={props.setTrangThai}
          />
        );
      });
    }
  }
  return <div className="tab__content__middle">{ShowListCinemaSysBrand()}</div>;
}

export default React.memo(CinemaSysHomeMiddle);
