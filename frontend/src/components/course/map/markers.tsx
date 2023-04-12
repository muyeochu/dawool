import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { FolderState } from "../../../recoil/CourseFolderState";
import styled from "styled-components";

import { ListType } from "../../../types/courseListTypes";
import { customAxios2 } from "../../../recoil/customAxios";
import { useNavigate } from "react-router-dom";
import { userState } from "../../../recoil/UserState";

declare global {
  interface Window {
    kakao: any;
    len: number;
    xyList: string[];
  }
}
window.xyList = [];
const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Markers = () => {
  const [folderState, setFolderState] = useRecoilState(FolderState);
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  const key = process.env.REACT_APP_KAKAOMAP_API_KEY;
  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.type = "text/javascript";
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&autoload=false`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        let nowURL = new URL(window.location.href).href.includes("my");
        if (!nowURL) return;
        const getCourseFileData = (): Promise<ListType[]> =>
          customAxios2
            .get(`user/my-course/${folderState.courseId}`)
            .then((res) => {
              return res.data;
            })
            .catch((err) => {
              console.log(err);
              if (err.response.data.code === "EXPIRED_JWT_TOKEN") {
                window.localStorage.clear();
                setUser({
                  accessToken: "",
                  accessTokenExpiresIn: 0,
                  grantType: "",
                  nickName: "",
                  refreshToken: "",
                  isSurveyed: false,
                });
                alert("다시 로그인 해 주시기 바랍니다.");
                navigate("/");
                window.location.reload();
              }
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
          var mapContainer = document.getElementById("markers"),
            mapOption = {
              center: new window.kakao.maps.LatLng(
                courseList["course"][0]["mapY"],
                courseList["course"][0]["mapX"]
              ),
              level: 8,
            };

          let map = new window.kakao.maps.Map(mapContainer, mapOption);
          var zoomControl = new window.kakao.maps.ZoomControl();
          map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

          let positions: any = [];

          for (let i = 0; i < window.len; i++) {
            const mapX = courseList["course"][i]["mapY"];
            const mapY = courseList["course"][i]["mapX"];
            positions.push({
              title: courseList["course"][i]["title"],
              latlng: new window.kakao.maps.LatLng(Number(mapX), Number(mapY)),
            });

            var marker = new window.kakao.maps.Marker({
              map: map,
              position: positions[i].latlng,
              title: positions[i].title,
            });
            marker.setMap(map);
          }
        });
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
    return () => {};
  }, []);
  return <MapContainer id="markers"></MapContainer>;
};

export default Markers;
