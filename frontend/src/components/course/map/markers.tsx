import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { FolderState } from "../../../recoil/CourseFolderState";
import styled from "styled-components";
import CourseList from "../sideBar/folderList/openFolder/courseList";
import { ListType } from "../../../types/courseListTypes";
import { customAxios2 } from "../../../recoil/customAxios";
declare global {
  //무슨 설정인지 잘은 모르겠음
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
type MapProps = {
  //받아오는 인자 타입 설정
  lat: String;
  lng: String;
};
let elements = document.querySelectorAll("div[mapX]");
console.log(elements);
const Markers = () => {
  const [folderState, setFolderState] = useRecoilState(FolderState);
  const key = process.env.REACT_APP_KAKAOMAP_API_KEY; //key 받아오기
  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.type = "text/javascript";
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&autoload=false`;
    document.head.appendChild(mapScript);

    const courseId = folderState.courseId;
    let len = document.getElementById("CourseContainer")?.childNodes[0];

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
          console.log(courseList["course"][0]["mapX"]);
          window.len = courseList["course"].length;
          console.log(typeof courseList["course"]);

          var mapContainer = document.getElementById("markers"), // 지도를 표시할 div
            mapOption = {
              center: new window.kakao.maps.LatLng(
                courseList["course"][0]["mapY"],
                courseList["course"][0]["mapX"]
              ), // 지도의 중심좌표
              level: 8, // 지도의 확대 레벨
            };

          let map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

          // 마커가 표시될 위치입니다
          let positions: any = [
            // new window.kakao.maps.LatLng(33.450705, 126.570677),
            // new kakao.maps.LatLng(33.450936, 126.569477),
            // new kakao.maps.LatLng(33.450879, 126.569940),
            // new kakao.maps.LatLng(33.451393, 126.570738)
          ];
          //   var imageSrc =
          //     "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
          for (let i = 0; i < window.len; i++) {
            // var imageSize = new window.kakao.maps.Size(24, 35);
            // var markerImage = new window.kakao.maps.MarkerImage(
            //   imageSrc,
            //   imageSize
            // );
            const mapX = courseList["course"][i]["mapY"];
            const mapY = courseList["course"][i]["mapX"];
            positions.push({
              latlng: new window.kakao.maps.LatLng(Number(mapX), Number(mapY)),
            });
            // window.xyList.push(mapX);
            // window.xyList.push(mapY);
            // console.log(window.xyList);
            // console.log(window.xyList[0]);
            var marker = new window.kakao.maps.Marker({
              map: map, // 마커를 표시할 지도
              position: positions[i].latlng, // 마커를 표시할 위치
              title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              //   image: markerImage, // 마커 이미지
            });
            marker.setMap(map);
            // console.log(window.xyList);
            // window.xyList.push(courseList["course"][i])
          }
          //   for (let i = 0; i < window.len; i++) {
          //   }
          //   console.log(position);
          //   for (var i = 0; i < window.len; i++) {
          //     var marker = new window.kakao.maps.Marker({
          //       map: map,
          //       position: position[i],
          //     });
          //     marker.setMap(map3);
          //   }
          // console.log(window.xyList[0][0])
        });

        // console.log(len);
        // console.log(len);
        // if (len) {
        //     const firstChild = len[0];
        //     const accessKey = firstChild.accessKey;
        //     console.log(accessKey);
        //   } else {
        //     console.log("해당 요소가 존재하지 않습니다.");
        //   }
        // let CourseContainer=document.querySelector('div#CourseContainer') as HTMLDivElement;
        // console.log(CourseContainer.childNodes[0])
        // console.log(courseId)

        // let elements = document.querySelectorAll('div[mapX]');
        // console.log(elements[0])
        // const firstElement = elements[0];
        // console.log(firstElement)
        // const text = firstElement;
        // console.log(text)

        //                 const mapContainer = document.getElementById("markers");
        //                 let markerPosition  = new window.kakao.maps.LatLng("33.333333", "126.222222");  //받아온 위도, 경도를 숫자로 변환해서 마커 위치로 설정
        //                 const mapOption={
        //                     center: markerPosition, // 지도의 중심좌표. 컴포넌트 불러올 때 좌표를 임의로 설정해서 쓸 수 있게 설정해놨슴다.
        //                     level:8, //지도 크기?
        //                 };
        //                 let map = new window.kakao.maps.Map(mapContainer,mapOption); //지도를 불러오는 변수

        //                 // 마커를 생성합니다
        //                 // let marker = new window.kakao.maps.Marker({
        //                 //     position: markerPosition
        //                 // });
        //                 marker.setMap(map); //지도에 마커 찍기

        //                 //                 // 마커를 표시할 위치와 title 객체 배열입니다
        //                 //마커 여러개 찍는 용 코드. 리코일에서 폴더 열려있으면 이 함수 실행시키기.
        //                 // var positions = [
        //                     //     {
        //                         //         title: '카카오',
        //                         //         latlng: new kakao.maps.LatLng(33.450705, 126.570677)
        //                         //     },
        // //     {
        // //         title: '생태연못',
        // //         latlng: new kakao.maps.LatLng(33.450936, 126.569477)
        // //     },
        // //     {
        //     //         title: '텃밭',
        //     //         latlng: new kakao.maps.LatLng(33.450879, 126.569940)
        //     //     },
        //     //     {
        //         //         title: '근린공원',
        //         //         latlng: new kakao.maps.LatLng(33.451393, 126.570738)
        //         //     }
        //         // ];
        //         // 마커 이미지의 이미지 주소입니다

        //         var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        //         // const positions = [
        //         //     function(){

        //         //         return ;
        //         //     }

        //         // ]

        //         for (var i = 0; i < /*positions.length*/0; i ++) {

        //             //     // 마커 이미지의 이미지 크기 입니다
        //                 var imageSize = new window.kakao.maps.Size(24, 35);

        //             //     // 마커 이미지를 생성합니다
        //                 var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

        //             //     // 마커를 생성합니다
        //                 var marker = new window.kakao.maps.Marker({
        //         map: map, // 마커를 표시할 지도
        //         // position: positions[i].latlng, // 마커를 표시할 위치
        //         // title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        //         image : markerImage // 마커 이미지
        //         });
        //     }
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
    return () => {
      // mapScript.removeEventListener("load",onLoadKakaoMap);
    };
  }, []);
  return <MapContainer id="markers"></MapContainer>;
};

export default Markers;
