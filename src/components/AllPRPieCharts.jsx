import React, { useEffect, useState } from "react";
import styles from "./AllPRPieCharts.module.css";

const chartConfigs = [
  { label: "Agencies", yes: 0.8, no: 0.2 },
  { label: "In-house\nteams", yes: 0.65, no: 0.35 },
  { label: "Solo\npractitioner", yes: 0.75, no: 0.25 },
  { label: "All\nanswers", yes: 0.68, no: 0.32 },
];

function DonutChart({ yes, no, label }) {
  const size = 260;
  const stroke = 56;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const yesLength = yes * circumference;
  const noLength = no * circumference;

  const [animatedYes, setAnimatedYes] = useState(0);
  const [animatedNo, setAnimatedNo] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimatedNo(noLength), 100);
    setTimeout(() => setAnimatedYes(yesLength), 400);
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

const AllPRPieCharts = () => (
  <div className={styles.container}>
    <div className={styles.grid}>
      {chartConfigs.map((cfg, i) => (
        <DonutChart key={i} yes={cfg.yes} no={cfg.no} label={cfg.label} />
      ))}
    </div>
  </div>
);

export default AllPRPieCharts;
