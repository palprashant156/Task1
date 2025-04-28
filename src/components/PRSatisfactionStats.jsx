import React from "react";
import styles from "./PRSatisfactionStats.module.css";

const PRSatisfactionStats = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            More PR Pros Find Value in Tools, with Agencies Ahead of the Curve
          </h2>
          <p className={styles.description}>
            Satisfaction with PR tools has significantly increased, with{" "}
            <span className={styles.highlight}>60%</span> of professionals happy
            with their outcomes in 2024, up from just{" "}
            <span className={styles.highlight}>36%</span> in 2022. Agencies, in
            particular, show higher satisfaction rates compared to brands,
            possibly due to wider tool adoption and more tailored solutions that
            meet their specific needs.
          </p>
        </div>
        <div className={styles.statsContainer}>
          <div className={styles.percentage}>60%</div>
          <div className={styles.label}>Satisfaction Score</div>
        </div>
      </div>
    </div>
  );
};

export default PRSatisfactionStats;
