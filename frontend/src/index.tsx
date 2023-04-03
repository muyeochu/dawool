import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import Footer from "./components/common/Footer/index";
import "./index.css";

const footerRemove =
  new URL(window.location.href).href.includes("/login") ||
  new URL(window.location.href).href.includes("mycourse");

ReactDOM.render(
  <RecoilRoot>
    <App />
    {footerRemove ? <></> : <Footer />}
  </RecoilRoot>,
  document.getElementById("root")
);
