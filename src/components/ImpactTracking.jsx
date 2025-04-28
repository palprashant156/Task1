import React from "react";
import styles from "./ImpactTracking.module.css";

const ImpactTracking = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>
            The Push for
            <span className={styles.highlight}>Proving Impact</span>
          </h2>
        </div>
        <div className={styles.statsSection}>
          <h3 className={styles.subheading}>
            More PR pros are tracking their efforts, with a{" "}
            <span className={styles.highlight}>9%</span> increase in just one
            year
          </h3>
          <p className={styles.description}>
            The number of PR professionals measuring their efforts has jumped
            from <span className={styles.highlight}>69%</span> in 2023 to{" "}
            <span className={styles.highlight}>75%</span> in 2024, reflecting a
            growing emphasis on tracking outcomes. As companies demand higher
            ROI, the pressure to prove the impact of PR work is intensifying,
            driving a shift towards data-driven decision-making and reporting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpactTracking;
