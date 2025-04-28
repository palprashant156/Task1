import React from "react";
import styles from "./PRMeasurementStats.module.css";

const PRMeasurementStats = () => {
  // Create arrays for dots (75 for yes, 25 for no)
  const yesDots = Array(75).fill("yes");
  const noDots = Array(25).fill("no");

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Do you measure{" "}
        <span className={styles.highlight}>your PR efforts?</span>
      </h2>
      <div className={styles.visualizationContainer}>
        <div className={styles.dotMatrix}>
          {/* Yes dots */}
          <div className={styles.yesSection}>
            <div className={styles.dots}>
              {yesDots.map((_, index) => (
                <div
                  key={`yes-${index}`}
                  className={`${styles.dot} ${styles.yesDot}`}
                />
              ))}
            </div>
            <div className={styles.label}>Yes — 75%</div>
          </div>

          {/* No dots */}
          <div className={styles.noSection}>
            <div className={styles.dots}>
              {noDots.map((_, index) => (
                <div
                  key={`no-${index}`}
                  className={`${styles.dot} ${styles.noDot}`}
                />
              ))}
            </div>
            <div className={styles.label}>No — 25%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PRMeasurementStats;
