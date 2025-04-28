import React, { useEffect, useState } from "react";
import styles from "./PRToolsPieChart.module.css";

const chartConfigs = [
  { label: "Agencies", yes: 0.8, no: 0.2 },
  { label: "In-house\nteams", yes: 0.65, no: 0.35 },
  { label: "Solo\npractitioner", yes: 0.75, no: 0.25 },
  { label: "All\nanswers", yes: 0.68, no: 0.32 },
];

const tableData = {
  header: ["All Answers", "Agencies", "In-house teams", "Sole practitioners"],
  rows: [
    { label: "Yes", values: ["67%", "82%", "58%", "54%"] },
    { label: "No", values: ["33%", "18%", "42%", "46%"] },
  ],
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

function TableDesign() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            {tableData.header.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, i) => (
            <tr key={i} className={i === 0 ? styles.yesRow : styles.noRow}>
              <td>{row.label}</td>
              {row.values.map((v, j) => (
                <td key={j}>{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const PRToolsPieChart = () => {
  const [view, setView] = useState("charts");
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Do you currently use{" "}
        <span className={styles.highlight}>any PR tools?</span>
      </h2>
      <div className={styles.toggleRow}>
        <button
          className={view === "charts" ? styles.toggleActive : styles.toggleBtn}
          onClick={() => setView("charts")}
        >
          Charts
        </button>
        <button
          className={view === "table" ? styles.toggleActive : styles.toggleBtn}
          onClick={() => setView("table")}
        >
          Table
        </button>
      </div>
      {view === "charts" ? (
        <>
          <div className={styles.legendRow}>
            <span
              className={styles.legendDot}
              style={{ background: "#FF6B4D" }}
            />{" "}
            Yes
            <span
              className={styles.legendDot}
              style={{ background: "#FFB3A7", marginLeft: "2rem" }}
            />{" "}
            No
          </div>
          <div className={styles.grid}>
            {chartConfigs.map((cfg, i) => (
              <DonutChart key={i} yes={cfg.yes} no={cfg.no} label={cfg.label} />
            ))}
          </div>
        </>
      ) : (
        <>
          <TableDesign />
          <div className={styles.textBlock}>
            <div className={styles.mainText}>
              While budget constraints still hold back{" "}
              <span className={styles.highlight}>68%</span> of PR professionals
              who have yet to adopt PR tools in 2024, there's a growing
              recognition that the time investment to learn how to use them is
              worthwhile.
            </div>
            <div className={styles.subText}>
              Each year, fewer PR pros see these tools as irrelevant, signaling
              a shift in the industry towards embracing technology despite
              ongoing financial challenges.
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PRToolsPieChart;
