import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import KakaoAuthHandle from "./components/auth/KakaoAuthHandle";
import {
  AccommodationPage,
  DetailPage,
  InterestPage,
  IntroPage,
  LoginPage,
  MyCoursePage,
  RestaurantPage,
  SearchPage,
  SurveyPage,
  TourSpotPage,
} from "./pages/index";
import Header from "./components/common/Header";
import {
  AppContainer,
  GridContainer,
  InvisibleBox,
  BoxMainContainer,
} from "./styles/appStyles";

function App() {
  console.log(window.location);
  return (
    <AppContainer>
      <BrowserRouter>
        <Header />
        <BoxMainContainer>
          {/* {current === "http://localhost:3000/" ? null : (
            <>
              <InvisibleBox />
            </>
          )} */}
          <GridContainer>
            <Routes>
              <Route path="/" element={<IntroPage />} />
              <Route path="/detail" element={<DetailPage />} />
              <Route path="/interest" element={<InterestPage />} />
              <Route path="/accommodation" element={<AccommodationPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/api/user/kakao/callback" element={<KakaoAuthHandle/>}></Route>
              <Route path="/mycourse" element={<MyCoursePage />} />
              <Route path="/restaurant" element={<RestaurantPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/survey" element={<SurveyPage />} />
              <Route path="/tourspot" element={<TourSpotPage />} />
            </Routes>
          </GridContainer>
        </BoxMainContainer>
      </BrowserRouter>
    </AppContainer>
  );
}


export default App;
