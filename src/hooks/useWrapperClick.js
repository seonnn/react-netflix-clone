import { useEffect } from "react";

export const useWrapperClick = (callbackFunc) => {
  useEffect(() => {
    const wrapperClcik = (e) => {
      if (e.target.className === "wrapper-modal") {
        callbackFunc();
      }
    };
    window.addEventListener("click", wrapperClcik);
  }, []);
};
