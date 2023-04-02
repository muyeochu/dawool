import React, { useState, useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Button from "../../common/Button";
import {
  TripListContainer,
  TripListTitle,
  ButtonGroup,
  ButtonList,
  TripCardListContainer,
  EndBlock,
  ToUpIcStyle,
} from "./styles";
import TripCardItem from "./tripCardItem";
import { TripListTitleType } from "../../../types/tripListTypes";
import Dropdown from "../../common/Dropdown";
import { City } from "../../../types/regionTypes";
import { citiesState, citySelectedState } from "../../../recoil/RegionState";
import { ListType } from "../../../types/tripListTypes";
import { listBarrierState } from "../../../recoil/TripListSelector";

import { getContentTypeId } from "../../../recoil/TripListSelector";
import { getListApi } from "../../../recoil/Api";

import { MoveToTop } from "../../utils/MoveToTop";

export interface TripListProps {
  titleType: TripListTitleType["titleType"];
}

function TripList({ titleType }: TripListProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false); // 무장애 필터링 버튼 중 하나가 클릭되었는지 여부 나타내는 상태값
  const [citySelected, setCitySelected] =
    useRecoilState<number>(citySelectedState); // 선택된 도시의 ID 값 나타내는 상태값
  const [cityList, setCityList] = useRecoilState<City[]>(citiesState); // 지역 정보를 관리하는 citiesState recoil atom의 상태값
  const selectedCity = cityList?.find((city) => city.id) ?? { id: 1 };

  const [listStateValue, setListStateValue] = useRecoilState(listBarrierState); // 무장애 태그 상태
  const [listData, setListData] = useState([]); // 받아온 데이터를 저장
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const pageEnd: any = useRef(); // 페이지의 끝부분

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isUpBtn, SetIsUpBtn] = useState(false)

  // 일정 스크롤이 내려가야 위로 올라가는 버튼이 보임
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 400) {
      SetIsUpBtn(true);
    } else {
      SetIsUpBtn(false);
    }
  }, [scrollPosition]);

  const contentTypeId = getContentTypeId(titleType);

  // 새로고침 할때마다 searchState 값 초기화 필요
  useEffect(() => {
    setListStateValue({ barrier: "00000" });
  }, []);

  const getListDatas = async (page: number) => {
    console.log("page는?", page);
    const listQuery = {
      contentTypeId: contentTypeId,
      area: citySelected,
      barrier: listStateValue.barrier,
      page: page,
      size: 10,
    };
    const res = await getListApi(listQuery);
    const data = await res.data.contents;

    // 페이지가 이동시에만 무한스크롤 구현(버튼 무한스크롤x)
    if (page > prevPage) {
      setListData((prev) => [...prev, ...data] as any);
      setPrevPage(page);
    } else {
      // 무장애 태그를 클릭할때 페이지 및 데이터 초기화
      if (prevBarrier !== listStateValue.barrier || prevCity !== citySelected) {
        setPage(0);
        setPrevPage(0);
        setListData(data);
        setPrevBarrier(listStateValue.barrier);
        setPrevCity(citySelected);
      }
      setListData(data);
    }
    setLoading(true);
  };

  const [prevPage, setPrevPage] = useState(0);
  const [prevCity, setPrevCity] = useState(1);
  const [prevBarrier, setPrevBarrier] = useState("00000");

  useEffect(() => {
    getListDatas(page);
  }, [page, listStateValue, citySelected]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const cityInfo = cityList.find((city) => city.id === citySelected);
  const cityName = cityInfo ? cityInfo.name : cityList[0].name;

  const typeText =
    titleType === "restaurant"
      ? "식당"
      : titleType === "accommodation"
      ? "숙박"
      : titleType === "tourSpot"
      ? "관광지"
      : titleType === "culture"
      ? "문화시설"
      : titleType === "leports"
      ? "레포츠"
      : titleType === "shopping"
      ? "쇼핑"
      : "기타";

  // 드롭다운에서 도시 선택할 때 호출
  const onCitySelected = (city: string | TripListTitleType) => {
    // const selectedCity = Number(city as TripListTitleType);
    setIsClicked(false);
  };

  useEffect(() => {
    if (loading) {
      //로딩되었을 때만 실행
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 1 }
      );
      //옵져버 탐색 시작
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  const buttons = [
    { id: 0, label: "지체장애인", icType: "bathchair", btType: 1 },
    { id: 1, label: "시각장애인", icType: "eye", btType: 1 },
    { id: 2, label: "청각장애인", icType: "ear", btType: 1 },
    { id: 3, label: "노인", icType: "oldman", btType: 1 },
    { id: 4, label: "영유아", icType: "toddler", btType: 1 },
  ];

  return (
    <>
      <TripListContainer id="trip-list-container">
        <TripListTitle>
          <span>{cityName}</span>{typeText}
        </TripListTitle>
        <ButtonGroup>
          {/* 무장애 필터링 버튼 */}
          <ButtonList>
            {buttons.map(({ id, label, icType, btType }) => (
              <Button key={id} id={id} icType={icType} btType={btType}>
                {label}
              </Button>
            ))}
          </ButtonList>

          {/* 드롭다운 */}
          <Dropdown
            itemList={cityList.map((city: City) => city.name)}
            onSelected={onCitySelected}
          >
            <span>{cityName}</span>
          </Dropdown>
        </ButtonGroup>
        {/* 관광지 목록 */}

        {listData && (
          <TripCardListContainer>
            {listData.map((item: ListType) => (
              <TripCardItem type="list" key={item.contentId} contents={item} />
            ))}
          </TripCardListContainer>
        )}
      </TripListContainer>
      {isUpBtn && <ToUpIcStyle onClick={MoveToTop}/>}
      <EndBlock ref={pageEnd} />
    </>
  );
}

export default TripList;
