import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import { renderWithLoader } from "../../utils/render-with-loader";
import { IntroUi } from "./ui";

export const Intro = () => {
  const { dispatch } = useContext(AppContext);
  useEffect(() => {
    dispatch({
      type: "answers",
      payload: [],
    });
    // eslint-disable-next-line
  }, []);

  return renderWithLoader(false, IntroUi);
};
