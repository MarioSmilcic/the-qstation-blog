import React from "react";
import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div>
      <div className={styles.loadingSpinner}>Loading..</div>
    </div>
  );
};

export default LoadingSpinner;
