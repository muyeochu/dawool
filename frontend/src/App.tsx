import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import KakaoAuthHandle from "./components/auth/KakaoAuthHandle";
import {
  AccommodationPage,
  AccommodationDetailPage,
  CultureDetailPage,
  LeportsDetailPage,
  RestaurantDetailPage,
  ShoppingDetailPage,
  TourSpotDetailPage,
  InterestPage,
  IntroPage,
  LoginPage,
  MyCoursePage,
  RestaurantPage,
  SearchPage,
  SurveyPage,
  TourSpotPage,
  CulturePage,
  LeportsPage,
  ShoppingPage,
  ModalTest,
  ButtonTest,
} from "./pages/index";
import Header from "./components/common/Header";
import ScrollToTop from "./components/utils/ScrollToTop";
import Modal from "./components/common/Modal";

import {
  AppContainer,
  GridContainer,
  BoxMainContainer,
} from "./styles/appStyles";

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <BoxMainContainer>
          <GridContainer>
            <Modal />
            <Routes>
              <Route path="/" element={<IntroPage />} />

              <Route
                path="/detail/accommodation/:id"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <AccommodationDetailPage />
                  </Suspense>
                }
              />
              <Route
                path="/detail/culture/:id"
                element={<CultureDetailPage />}
              />
              <Route
                path="/detail/leports/:id"
                element={<LeportsDetailPage />}
              />
              <Route
                path="/detail/restaurant/:id"
                element={<RestaurantDetailPage />}
              />
              <Route
                path="/detail/shopping/:id"
                element={<ShoppingDetailPage />}
              />
              <Route
                path="/detail/tourspot/:id"
                element={<TourSpotDetailPage />}
              />

              <Route path="/interest" element={<InterestPage />} />
              <Route
                path="/accommodation"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <AccommodationPage />
                  </Suspense>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/callback"
                element={<KakaoAuthHandle />}
              ></Route>
              <Route path="/mycourse" element={
                  <Suspense fallback={<div>Loading...</div>}>
                  <MyCoursePage />
              </Suspense>
              } />
              <Route path="/restaurant" element={<RestaurantPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/survey" element={<SurveyPage />} />
              <Route path="/tourspot" element={<TourSpotPage />} />
              <Route path="/culture" element={<CulturePage />} />
              <Route path="/leports" element={<LeportsPage />} />
              <Route path="/shopping" element={<ShoppingPage />} />

              {/* 테스트 페이지 */}
              <Route path="/modaltest" element={<ModalTest />} />
              <Route path="/btntest" element={<ButtonTest />} />
            </Routes>
          </GridContainer>
        </BoxMainContainer>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
