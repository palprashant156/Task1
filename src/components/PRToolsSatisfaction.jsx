import React from "react";
import styles from "./PRToolsSatisfaction.module.css";

const PRToolsSatisfaction = () => {
  return (
    <div className={styles.container}>
      <section className={styles.satisfactionSection}>
        <h2>
          More PR Pros Find Value in Tools, with Agencies Ahead of the Curve
        </h2>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p>
              Satisfaction with PR tools has significantly increased, with{" "}
              <span className={styles.highlight}>60%</span> of professionals
              happy with their outcomes in 2024, up from just{" "}
              <span className={styles.highlight}>36%</span> in 2022. Agencies,
              in particular, show higher satisfaction rates compared to brands,
              possibly due to wider tool adoption and more tailored solutions
              that meet their specific needs.
            </p>
          </div>
          <div className={styles.scoreDisplay}>
            <div className={styles.percentage}>60%</div>
            <div className={styles.label}>Satisfaction Score</div>
          </div>
        </div>
      </section>

      <section className={styles.impactSection}>
        <div className={styles.impactContent}>
          <h2>
            <span className={styles.impactTitle}>The Push for</span>
            <br />
            <span className={styles.impactHighlight}>Proving Impact</span>
          </h2>
          <div className={styles.impactStats}>
            <h3>
              More PR pros are tracking their efforts, with a{" "}
              <span className={styles.highlight}>9%</span> increase in just one
              year
            </h3>
            <p>
              The number of PR professionals measuring their efforts has jumped
              from <span className={styles.highlight}>69%</span> in 2023 to{" "}
              <span className={styles.highlight}>75%</span> in 2024, reflecting
              a growing emphasis on tracking outcomes. As companies demand
              higher ROI, the pressure to prove the impact of PR work is
              intensifying, driving a shift towards data-driven decision-making
              and reporting.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PRToolsSatisfaction;
