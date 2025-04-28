import React, { useState } from "react";
import styles from "./PRToolsReasons.module.css";

const reasons = [
  {
    title: "I don't have the budget (68%)",
    values: [
      { label: "Agencies", value: 72 },
      { label: "In-house teams", value: 57 },
      { label: "Solo practitioner", value: 71 },
    ],
    wide: true,
  },
  {
    title: "I don't have time to learn (19%)",
    values: [
      { label: "Agencies", value: 22 },
      { label: "In-house teams", value: 21 },
      { label: "Solo practitioner", value: 14 },
    ],
  },
  {
    title: "Other (19%)",
    values: [
      { label: "Agencies", value: 6 },
      { label: "In-house teams", value: 4 },
      { label: "Solo practitioner", value: 7 },
    ],
  },
  {
    title: "I don't need any (8%)",
    values: [
      { label: "Agencies", value: 13 },
      { label: "In-house teams", value: 17 },
      { label: "Solo practitioner", value: 14 },
    ],
    isBar: true,
  },
];

const colors = {
  Agencies: "#FF6B4D",
  "In-house teams": "#FFB3A7",
  "Solo practitioner": "#FF9C8B",
};

function Bar({ value, color, max = 100 }) {
  return (
    <div className={styles.barWrapper}>
      <div
        className={styles.bar}
        style={{ height: `${value}%`, background: color, maxHeight: "180px" }}
      >
        <span className={styles.barValue}>{value}%</span>
      </div>
    </div>
  );
}

function HorizontalBar({ value, color }) {
  return (
    <div className={styles.hBarWrapper}>
      <div
        className={styles.hBar}
        style={{ width: `${value}%`, background: color }}
      >
        <span className={styles.hBarValue}>{value}%</span>
      </div>
    </div>
  );
}

const PRToolsReasons = () => {
  const [view, setView] = useState("charts");
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        What are the primary reasons why
        <br />
        <span className={styles.highlight}>you do not use PR tools?</span>
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
        <div className={styles.chartsGrid}>
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className={
                reason.wide
                  ? `${styles.reasonBox} ${styles.reasonBoxWide}`
                  : styles.reasonBox
              }
            >
              <div className={styles.reasonTitle}>{reason.title}</div>
              {reason.isBar ? (
                <div className={styles.hBarGroup}>
                  {reason.values.map((v, i) => (
                    <HorizontalBar
                      key={i}
                      value={v.value}
                      color={colors[v.label]}
                    />
                  ))}
                </div>
              ) : (
                <div className={styles.barGroup}>
                  {reason.values.map((v, i) => (
                    <Bar key={i} value={v.value} color={colors[v.label]} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.tableWrapper}>
          {/* Table view can be implemented here if needed */}
          <div className={styles.tablePlaceholder}>
            Table view coming soon...
          </div>
        </div>
      )}
      <div className={styles.legendRow}>
        <span
          className={styles.legendDot}
          style={{ background: colors["Agencies"] }}
        />{" "}
        Agencies
        <span
          className={styles.legendDot}
          style={{ background: colors["In-house teams"], marginLeft: "2rem" }}
        />{" "}
        In-house teams
        <span
          className={styles.legendDot}
          style={{
            background: colors["Solo practitioner"],
            marginLeft: "2rem",
          }}
        />{" "}
        Solo practitioner
      </div>
    </div>
  );
};

export default PRToolsReasons;
