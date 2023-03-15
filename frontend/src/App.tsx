import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import ScrollToTop from "./components/utils/ScrollToTop";

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
            <Routes>
              <Route path="/" element={<IntroPage />} />
              <Route path="/detail" element={<DetailPage />} />
              <Route path="/interest" element={<InterestPage />} />
              <Route path="/accommodation" element={<AccommodationPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/api/user/kakao/callback"
                element={<KakaoAuthHandle />}
              ></Route>
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
