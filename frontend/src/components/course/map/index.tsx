import { useEffect } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    kakao: any;
  }
}
const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;
type MapProps = {
  lat: String;
  lng: String;
};
const KakaoMap = ({ lat, lng }: MapProps) => {
  const key = process.env.REACT_APP_KAKAOMAP_API_KEY;
  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.type = "text/javascript";
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&autoload=false`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        let markerPosition = new window.kakao.maps.LatLng(
          Number(lat),
          Number(lng)
        );
        const mapOption = {
          center: markerPosition,
          level: 3,
        };
        let map = new window.kakao.maps.Map(mapContainer, mapOption);

        let marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
    return () => {
      mapScript.removeEventListener("load", onLoadKakaoMap);
    };
  }, []);
  return <MapContainer id="map"></MapContainer>;
};

export default KakaoMap;
