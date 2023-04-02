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
  BookmarkPage,
  ModalTest,
  ButtonTest,
  MicTest,
} from "./pages/index";
import Header from "./components/common/Header";
import ScrollToTop from "./components/utils/ScrollToTop";
import Modal from "./components/common/Modal";

import Loading from "./components/common/Loading";

import {
  AppContainer,
  GridContainer,
  BoxMainContainer,
} from "./styles/appStyles";
import CourseModal from "./components/common/Modal/courseModal";

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <BoxMainContainer>
          <GridContainer>
            <CourseModal/>
            <Modal />
            <Routes>
              <Route path="/" element={<IntroPage />} />

              <Route
                path="/detail/accommodation/:id"
                element={
                  <Suspense fallback={<Loading />}>
                    <AccommodationDetailPage />
                  </Suspense>
                }
              />
              <Route
                path="/detail/culture/:id"
                element={
                  <Suspense fallback={<Loading />}>
                    <CultureDetailPage />
                  </Suspense>
                }
              />
              <Route
                path="/detail/leports/:id"
                element={
                  <Suspense fallback={<Loading />}>
                    <LeportsDetailPage />
                  </Suspense>
                }
              />
              <Route
                path="/detail/restaurant/:id"
                element={
                  <Suspense fallback={<Loading />}>
                    <RestaurantDetailPage />
                  </Suspense>
                }
              />
              <Route
                path="/detail/shopping/:id"
                element={
                  <Suspense fallback={<Loading />}>
                    <ShoppingDetailPage />
                  </Suspense>
                }
              />
              <Route
                path="/detail/tourspot/:id"
                element={
                  <Suspense fallback={<Loading />}>
                    <TourSpotDetailPage />
                  </Suspense>
                }
              />

              <Route
                path="/interest"
                element={
                  <Suspense fallback={<Loading />}>
                    <BookmarkPage />
                  </Suspense>
                }
              />
              <Route
                path="/accommodation"
                element={
                  <Suspense fallback={<Loading />}>
                    <AccommodationPage />
                  </Suspense>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/callback" element={<KakaoAuthHandle />}></Route>

              <Route
                path="/mycourse"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <MyCoursePage />
                  </Suspense>
                }
              />
              <Route
                path="/restaurant"
                element={
                  <Suspense fallback={<Loading />}>
                    <RestaurantPage />
                  </Suspense>
                }
              />

              <Route
                path="/search"
                element={
                  <Suspense fallback={<Loading />}>
                    <SearchPage />
                  </Suspense>
                }
              />

              <Route path="/survey" element={<SurveyPage />} />
              <Route
                path="/tourspot"
                element={
                  <Suspense fallback={<Loading />}>
                    <TourSpotPage />
                  </Suspense>
                }
              />
              <Route
                path="/culture"
                element={
                  <Suspense fallback={<Loading />}>
                    <CulturePage />
                  </Suspense>
                }
              />
              <Route
                path="/leports"
                element={
                  <Suspense fallback={<Loading />}>
                    <LeportsPage />
                  </Suspense>
                }
              />
              <Route
                path="/shopping"
                element={
                  <Suspense fallback={<Loading />}>
                    <ShoppingPage />
                  </Suspense>
                }
              />

              {/* 테스트 페이지 */}
              <Route path="/modaltest" element={<ModalTest />} />
              <Route path="/btntest" element={<ButtonTest />} />
              <Route path="/mictest" element={<MicTest />} />
            </Routes>
          </GridContainer>
        </BoxMainContainer>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
