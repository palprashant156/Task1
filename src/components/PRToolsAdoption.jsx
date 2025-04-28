import React from "react";
import styles from "./PRToolsAdoption.module.css";

const PRToolsAdoption = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftContent}>
          <h2 className={styles.title}>
            PR Tool Adoption Rises,{" "}
            <span className={styles.highlight}>
              Yet One-Third Still Go Without
            </span>
          </h2>
        </div>
        <div className={styles.rightContent}>
          <h3 className={styles.subtitle}>
            The PR tool divide: agencies embrace, solos lag behind
          </h3>
          <p className={styles.description}>
            PR tool usage has surged to nearly{" "}
            <span className={styles.highlight}>68%</span> in 2024. While
            adoption rates have grown, especially among agencies where{" "}
            <span className={styles.highlight}>82%</span> now leverage these
            tools, one-third of PR professionals are still working without them,
            reflecting a significant gap in the industry's tech integration.
          </p>
        </div>
        <div className={styles.monitorIcon}>
          <svg
            width="220"
            height="200"
            viewBox="0 0 220 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Monitor Base */}
            <path
              d="M80 180H140"
              stroke="#A78BFA"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M105 165L115 190"
              stroke="#A78BFA"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Monitor Frame */}
            <rect
              x="20"
              y="20"
              width="180"
              height="140"
              rx="12"
              fill="#A78BFA"
              fillOpacity="0.15"
            />
            <rect x="30" y="30" width="160" height="120" rx="8" fill="white" />

            {/* Screen Content */}
            <circle cx="170" cy="45" r="18" fill="#4ADE80" fillOpacity="0.2" />
            <path
              d="M164 45L168 49L176 41"
              stroke="#4ADE80"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Graph */}
            <path
              d="M50 120L80 90L110 130L140 70L170 100"
              stroke="#A78BFA"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Close Button */}
            <circle cx="180" cy="30" r="8" fill="#FF6B6B" fillOpacity="0.2" />
            <path
              d="M177 27L183 33M183 27L177 33"
              stroke="#FF6B6B"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PRToolsAdoption;
