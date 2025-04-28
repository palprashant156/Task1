import React, { useState, useEffect, useRef } from "react";
import styles from "./PRChallenges.module.css";

const challenges = [
  {
    title: "Working on a tight budget",
    data: { 2024: 57, 2023: 48, 2022: 34 },
  },
  {
    title: "Getting journalists to respond",
    data: { 2024: 56, 2023: 52, 2022: 60 },
  },
  {
    title: "Getting top-tier coverage",
    data: { 2024: 50, 2023: 44, 2022: 46 },
  },
  {
    title: "Demonstrating the value of my work",
    data: { 2024: 48, 2023: 41, 2022: 41 },
  },
  {
    title: "Finding the right media contacts",
    data: { 2024: 43, 2023: 47, 2022: 35 },
  },
  {
    title: "Experiencing burnout",
    data: { 2024: 41, 2023: 36, 2022: 38 },
  },
  {
    title: "Keeping my media lists organized",
    data: { 2024: 31, 2023: 25, 2022: 30 },
  },
  {
    title: "Managing client expectations",
    data: { 2024: 31, 2023: 26, 2022: 33 },
  },
  {
    title: "Tracking media coverage",
    data: { 2024: 30, 2023: 29, 2022: 32 },
  },
  {
    title: "Implementing technology",
    data: { 2024: 25, 2023: 28, 2022: 12 },
  },
  {
    title: "Collaboration with my team",
    data: { 2024: 21, 2023: 19, 2022: 11 },
  },
  {
    title: "Other",
    data: { 2024: 3, 2023: 2, 2022: 3 },
  },
];

const AnimatedNumber = ({ end, isVisible }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = 1;
      const stepTime = Math.floor(duration / (end / increment));

      const timer = setInterval(() => {
        start += increment;
        setValue(start);
        if (start >= end) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, end]);

  return `${Math.min(value, end)}%`;
};

const TableView = ({ isVisible }) => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <div className={styles.challengeColumn}>Challenge</div>
        <div className={styles.yearColumns}>
          <div>2024</div>
          <div>2023</div>
          <div>2022</div>
        </div>
      </div>

      {challenges.map((challenge, index) => (
        <div
          key={index}
          className={`${styles.tableRow} ${isVisible ? styles.fadeIn : ""}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className={styles.challengeCell}>{challenge.title}</div>
          <div className={styles.yearCells}>
            <div className={styles.cell}>
              <AnimatedNumber
                end={challenge.data["2024"]}
                isVisible={isVisible}
              />
            </div>
            <div className={styles.cell}>
              <AnimatedNumber
                end={challenge.data["2023"]}
                isVisible={isVisible}
              />
            </div>
            <div className={styles.cell}>
              <AnimatedNumber
                end={challenge.data["2022"]}
                isVisible={isVisible}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ChartView = ({ isVisible }) => {
  return (
    <div className={styles.chartContainer}>
      {challenges.map((challenge, index) => (
        <div key={index} className={styles.chartRow}>
          <div className={styles.label}>{challenge.title}</div>
          <div className={styles.bars}>
            {Object.entries(challenge.data)
              .reverse()
              .map(([year, value], i) => (
                <div
                  key={year}
                  className={styles.barWrapper}
                  style={{ width: "100%" }}
                >
                  <div
                    className={`${styles.bar} ${
                      isVisible ? styles.animate : ""
                    }`}
                    style={{
                      width: isVisible ? `${value}%` : "0%",
                      backgroundColor:
                        i === 0 ? "#C4B5FD" : i === 1 ? "#A78BFA" : "#8B5CF6",
                    }}
                  >
                    <span className={styles.value}>
                      <AnimatedNumber end={value} isVisible={isVisible} />
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const PRChallenges = () => {
  const [activeView, setActiveView] = useState("charts");
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.header}>
        <h2>Did you struggle with any of the</h2>
        <h2 className={styles.highlight}>following in the last 12 months?</h2>
      </div>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeView === "charts" ? styles.active : ""
          }`}
          onClick={() => setActiveView("charts")}
        >
          Charts
        </button>
        <button
          className={`${styles.tab} ${
            activeView === "table" ? styles.active : ""
          }`}
          onClick={() => setActiveView("table")}
        >
          Table
        </button>
      </div>

      <div className={styles.content}>
        {activeView === "charts" ? (
          <>
            <div className={styles.legend}>
              <div className={styles.legendItem}>
                <span
                  className={styles.dot}
                  style={{ backgroundColor: "#8B5CF6" }}
                ></span>
                <span>2024</span>
              </div>
              <div className={styles.legendItem}>
                <span
                  className={styles.dot}
                  style={{ backgroundColor: "#A78BFA" }}
                ></span>
                <span>2023</span>
              </div>
              <div className={styles.legendItem}>
                <span
                  className={styles.dot}
                  style={{ backgroundColor: "#C4B5FD" }}
                ></span>
                <span>2022</span>
              </div>
            </div>
            <ChartView isVisible={isVisible} />
          </>
        ) : (
          <TableView isVisible={isVisible} />
        )}

        <div className={styles.statsSection}>
          <div
            className={`${styles.statNumber} ${
              isVisible ? styles.animate : ""
            }`}
          >
            <AnimatedNumber end={43} isVisible={isVisible} />
          </div>
          <div
            className={`${styles.statText} ${isVisible ? styles.fadeIn : ""}`}
          >
            of PR Pros have experienced budget cuts leading to the cancellation
            of paid tools.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PRChallenges;
