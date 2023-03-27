import KakaoMap from "../course/map";

import { MapContainer } from "./styles";

import { InfoBox, BarrierContainer, BarrierBtnContainer } from "./styles";

interface MapTypes {
  mapX: number;
  mapY: number;
}

const Map = ({ mapInfo }: { mapInfo: MapTypes }) => {
  const lat = mapInfo.mapY.toString();
  const lng = mapInfo.mapX.toString();

  return (
    <BarrierContainer>
      <p>지도</p>
      <p className="exp">지도에서 위치를 확인해보세요.</p>
      <MapContainer>
        <KakaoMap lat={lat} lng={lng} />
      </MapContainer>
    </BarrierContainer>
  );
};

export default Map;
