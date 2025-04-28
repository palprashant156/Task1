import React, { useEffect, useRef, useState } from "react";
import styles from "./PRStrategy.module.css";
import PRBarGraph from "./PRBarGraph";

const AnimatedNumber = ({ end, isVisible }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000;
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

const PRStrategy = () => {
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
    <>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <h2 className={styles.title}>
              PR Pros Double Down on{" "}
              <span className={styles.highlight}>Strategy</span>
              <br />
              <span className={styles.highlight}>and Results in 2024</span>
            </h2>
          </div>

          <div className={styles.rightSection}>
            <h3 className={styles.subtitle}>
              Top-tier coverage, measurable impact, and reporting efficiency
              take center stage
            </h3>

            <p className={styles.description}>
              PR pros are more strategic and results-driven than ever. Securing
              top-tier publications has surged as a priority. The focus on
              tracking and measuring PR efforts has jumped significantly,
              reaching nearly{" "}
              <span
                className={`${styles.stat} ${isVisible ? styles.animate : ""}`}
              >
                <AnimatedNumber end={39} isVisible={isVisible} />
              </span>{" "}
              in 2024. Additionally, the push to create PR reports faster has
              more than tripled, rising from{" "}
              <span
                className={`${styles.stat} ${isVisible ? styles.animate : ""}`}
              >
                <AnimatedNumber end={6} isVisible={isVisible} />
              </span>{" "}
              in 2022 to{" "}
              <span
                className={`${styles.stat} ${isVisible ? styles.animate : ""}`}
              >
                <AnimatedNumber end={22} isVisible={isVisible} />
              </span>{" "}
              in 2024, highlighting the industry's increasing emphasis on
              efficiency and proving value.
            </p>
          </div>
        </div>
      </div>
      <PRBarGraph />
    </>
  );
};

export default PRStrategy;
