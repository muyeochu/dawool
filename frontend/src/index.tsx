import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import Footer from "./components/common/Footer/index";

ReactDOM.render(
  <RecoilRoot>
    <App />
    <Footer />
  </RecoilRoot>,
  document.getElementById("root")
);
