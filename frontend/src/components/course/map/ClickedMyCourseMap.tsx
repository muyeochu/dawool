import { useEffect } from "react";
import styled from "styled-components";
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
  const key = process.env.REACT_APP_KAKAOMAP_API_KEY; //key 받아오기
  useEffect(() => {
    // window.onload=()=>{
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.type = "text/javascript";
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&autoload=false`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("clickedMap");
        let markerPosition = new window.kakao.maps.LatLng();
        //   Number(lat),
        //   Number(lng) //받아온 위도, 경도를 숫자로 변환해서 마커 위치로 설정
        const mapOption = {
          center: markerPosition, // 지도의 중심좌표. 컴포넌트 불러올 때 좌표를 임의로 설정해서 쓸 수 있게 설정해놨슴다.
          level: 3, //지도 크기?
        };
        let map = new window.kakao.maps.Map(mapContainer, mapOption); //지도를 불러오는 변수
        console.log(map);

        // 마커를 생성합니다
        let marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map); //지도에 마커 찍기

        //                 // 마커를 표시할 위치와 title 객체 배열입니다
        //마커 여러개 찍는 용 코드. 리코일에서 폴더 열려있으면 이 함수 실행시키기.
        // var positions = [
        //     {
        //         title: '카카오',
        //         latlng: new kakao.maps.LatLng(33.450705, 126.570677)
        //     },
        //     {
        //         title: '생태연못',
        //         latlng: new kakao.maps.LatLng(33.450936, 126.569477)
        //     },
        //     {
        //         title: '텃밭',
        //         latlng: new kakao.maps.LatLng(33.450879, 126.569940)
        //     },
        //     {
        //         title: '근린공원',
        //         latlng: new kakao.maps.LatLng(33.451393, 126.570738)
        //     }
        // ];
        // 마커 이미지의 이미지 주소입니다
        // var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        // for (var i = 0; i < positions.length; i ++) {

        //     // 마커 이미지의 이미지 크기 입니다
        //     var imageSize = new kakao.maps.Size(24, 35);

        //     // 마커 이미지를 생성합니다
        //     var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        //     // 마커를 생성합니다
        //     var marker = new kakao.maps.Marker({
        //         map: map, // 마커를 표시할 지도
        //         position: positions[i].latlng, // 마커를 표시할 위치
        //         title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        //         image : markerImage // 마커 이미지
        //     });}
        // }
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
    return () => {
      // mapScript.removeEventListener("load",onLoadKakaoMap);
    };
    // }
  }, []);
  return <MapContainer id="clickedMap"></MapContainer>;
};

export default ClickedKakaoMap;
