import {useEffect} from "react";
import styled from "styled-components";
declare global{  //무슨 설정인지 잘은 모르겠음
    interface Window{
        kakao:any;
    }
}
const MapContainer = styled.div`
    width:100%;
    height:100%;
`
type MapProps={ //받아오는 인자 타입 설정
    lat:String;
    lng:String;
}
const KakaoMap =( {lat, lng}:MapProps)=>{
    const key = process.env.REACT_APP_KAKAOMAP_API_KEY; //key 받아오기
    useEffect(()=>{
        const mapScript = document.createElement("script");
        mapScript.async = true;
        mapScript.type="text/javascript";
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&autoload=false`;
        document.head.appendChild(mapScript);
        
        
        const onLoadKakaoMap =()=>{
            window.kakao.maps.load(()=>{
                const mapContainer = document.getElementById("map");
                let markerPosition  = new window.kakao.maps.LatLng(Number(lat), Number(lng));  //받아온 위도, 경도를 숫자로 변환해서 마커 위치로 설정
                const mapOption={
                    center: markerPosition, // 지도의 중심좌표. 컴포넌트 불러올 때 좌표를 임의로 설정해서 쓸 수 있게 설정해놨슴다.
                    level:3, //지도 크기?
                };
                let map = new window.kakao.maps.Map(mapContainer,mapOption); //지도를 불러오는 변수

                // 마커를 생성합니다
                let marker = new window.kakao.maps.Marker({
                    position: markerPosition     
                });
                marker.setMap(map); //지도에 마커 찍기

            });
        };
        mapScript.addEventListener("load",onLoadKakaoMap);
        return()=>{
            mapScript.removeEventListener("load",onLoadKakaoMap);
        };
    },[]);
        return <MapContainer id="map"></MapContainer>;
}

export default KakaoMap;