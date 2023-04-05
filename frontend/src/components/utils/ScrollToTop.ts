import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 새로고침시 스크롤 맨 위로 이동
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
