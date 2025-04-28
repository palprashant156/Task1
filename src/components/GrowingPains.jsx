import React from "react";
import styles from "./GrowingPains.module.css";

const GrowingPains = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Pain Points in PR</h1>
      </div>

      <div className={styles.contentCard}>
        <div className={styles.titleSection}>
          <h2 className={styles.mainTitle}>
            Growing Pains in PR:
            <div className={styles.subtitle}>
              <span>Budgets,</span>
              <span>Engagement,</span>
              <span>and Value</span>
            </div>
          </h2>
        </div>

        <div className={styles.infoSection}>
          <h3 className={styles.subheading}>
            Financial pressures and industry shifts are challenging PR pros to
            adapt
          </h3>

          <p className={styles.description}>
            As economic pressures rise, PR professionals are finding it harder
            to navigate shrinking budgets, connect with journalists, and prove
            their worth. In just two years, the number of PR pros struggling
            with budget constraints has jumped from{" "}
            <span className={styles.highlight}>35%</span> to{" "}
            <span className={styles.highlight}>57%</span>. These statistics
            reflect a rapidly evolving industry where proving ROI is more
            critical — and more challenging —than ever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GrowingPains;
