import React from "react";
import cx from "classnames";
import "./style.css";

export const LoadingSpinner = () => (
  <div className={cx("spinner-container")}>
    <div className={cx("spinner")} />
  </div>
);
