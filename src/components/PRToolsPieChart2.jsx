import React, { useEffect, useState } from "react";
import styles from "./PRToolsPieChart2.module.css";

const donutData = {
  solo: { yes: 0.75, no: 0.25 }, // visually estimated
  all: { yes: 0.68, no: 0.32 }, // visually estimated
};

function DonutChart({ yes, no, label }) {
  const size = 260;
  const stroke = 56; // Thicker ring
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const yesLength = yes * circumference;
  const noLength = no * circumference;

  // Animation state
  const [animatedYes, setAnimatedYes] = useState(0);
  const [animatedNo, setAnimatedNo] = useState(0);

  useEffect(() => {
    // Animate both segments
    setTimeout(() => setAnimatedNo(noLength), 100); // slight delay for effect
    setTimeout(() => setAnimatedYes(yesLength), 400); // animate yes after no
  }, [yesLength, noLength]);

  return (
    <svg width={size} height={size} className={styles.donut}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#FFB3A7"
        strokeWidth={stroke}
        strokeDasharray={`${animatedNo} ${circumference - animatedNo}`}
        strokeDashoffset={0}
        style={{ transition: "stroke-dasharray 1s cubic-bezier(0.4,0,0.2,1)" }}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#FF6B4D"
        strokeWidth={stroke}
        strokeDasharray={`${animatedYes} ${circumference - animatedYes}`}
        strokeDashoffset={-noLength}
        style={{ transition: "stroke-dasharray 1s cubic-bezier(0.4,0,0.2,1)" }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className={styles.donutLabel}
      >
        {label}
      </text>
    </svg>
  );
}

const PRToolsPieChart2 = () => (
  <div className={styles.container}>
    <div className={styles.chartsRow}>
      <DonutChart
        yes={donutData.solo.yes}
        no={donutData.solo.no}
        label={"Solo\npractitioner"}
      />
      <DonutChart
        yes={donutData.all.yes}
        no={donutData.all.no}
        label={"All\nanswers"}
      />
    </div>
    <div className={styles.textBlock}>
      <div className={styles.mainText}>
        While budget constraints still hold back{" "}
        <span className={styles.highlight}>68%</span> of PR professionals who
        have yet to adopt PR tools in 2024, there's a growing recognition that
        the time investment to learn how to use them is worthwhile.
      </div>
      <div className={styles.subText}>
        Each year, fewer PR pros see these tools as irrelevant, signaling a
        shift in the industry towards embracing technology despite ongoing
        financial challenges.
      </div>
    </div>
  </div>
);

export default PRToolsPieChart2;
 