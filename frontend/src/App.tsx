import React from "react";
import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/interest" element={<InterestPage />} />
        <Route path="/accommodation" element={<AccommodationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mycourse" element={<MyCoursePage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/tourspot" element={<TourSpotPage />} />
      </Routes>
    </div>
  );
}

export default App;
