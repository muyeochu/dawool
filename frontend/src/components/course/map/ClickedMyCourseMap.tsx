import { useEffect } from "react";
import styled from "styled-components";
import { ListType } from "../../../types/courseListTypes";
import { customAxios2 } from "../../../recoil/customAxios";
import { useRecoilState } from "recoil";
import { FolderState } from "../../../recoil/CourseFolderState";
import { clickedState } from "../../../recoil/ClickedCourse";
declare global {
  //무슨 설정인지 잘은 모르겠음
  interface Window {
    kakao: any;
  }
}
const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;
type MapProps = {
  //받아오는 인자 타입 설정
  lat: String;
  lng: String;
};
const ClickedKakaoMap = () => {
  const [folderState, setFolderState] = useRecoilState(FolderState);
  const [clState, setClState] = useRecoilState(clickedState);
  console.log(clState.mapX);
  const key = process.env.REACT_APP_KAKAOMAP_API_KEY; //key 받아오기
  useEffect(() => {
    // window.onload=()=>{
    console.log("여기까지 들어옴");
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.type = "text/javascript";
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&autoload=false`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const getCourseFileData = (): Promise<ListType[]> =>
          customAxios2
            .get(`user/my-course/${folderState.courseId}`)
            .then((res) => {
              console.log(res);
              return res.data;
            })
            .catch((err) => {
              console.log(err);
            });
        async function myFunction() {
          try {
            let courseList: any = await getCourseFileData();
            return courseList;
          } catch (err) {
            throw err;
          }
        }
        myFunction().then((courseList) => {
          window.xyList = [];
          window.len = courseList["course"].length;
          if (window.len === 0) return;
          var mapContainer = document.getElementById("clickedMap"), // 지도를 표시할 div
            mapOption = {
              center: new window.kakao.maps.LatLng(
                Number(clState.mapX),
                Number(clState.mapY)
              ), // 지도의 중심좌표
              level: 5, // 지도의 확대 레벨
            };

          let map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
          // function setMarkers(map: any) {
          //   for (var i = 0; i < positions.length; i++) {
          //     positions[i].setMap(map);
          //   }
          // }
          // function hideMarkers() {
          //   setMarkers(null);
          // }
          // hideMarkers();
          // 마커가 표시될 위치입니다
          let positions: any = [];
          var imageSrc =
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
          for (let i = 0; i < window.len; i++) {
            var imageSize = new window.kakao.maps.Size(24, 35);
            var markerImage = new window.kakao.maps.MarkerImage(
              imageSrc,
              imageSize
            );

            const mapX = courseList["course"][i]["mapY"];
            const mapY = courseList["course"][i]["mapX"];
            positions.push({
              title: courseList["course"][i]["title"],
              latlng: new window.kakao.maps.LatLng(Number(mapX), Number(mapY)),
            });
            if (
              Number(mapX) === Number(clState.mapX) &&
              Number(mapY) === Number(clState.mapY)
            ) {
              var marker = new window.kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage, // 마커 이미지
              });
            } else {
              var marker = new window.kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                //   image: markerImage, // 마커 이미지
              });
            }
            marker.setMap(map);
          }
        });
      });
    };

    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => {
      mapScript.removeEventListener("load", onLoadKakaoMap);
      setClState({
        isClicked: false,
        mapX: "",
        mapY: "",
      });
    };
    // }
  }, [clState.mapX]);
  return <MapContainer id="clickedMap"></MapContainer>;
};

export default ClickedKakaoMap;
