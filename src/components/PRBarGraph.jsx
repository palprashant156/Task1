import React, { useState, useEffect, useRef } from "react";
import styles from "./PRBarGraph.module.css";

const yearData = {
  2024: [
    { label: "Securing top tier publication", value: 51 },
    { label: "Tracking & measuring PR efforts", value: 40 },
    {
      label: "Having a better understanding of media contacts and their beat",
      value: 33,
    },
    { label: "Managing my daily PR activities more efficiently", value: 32 },
    { label: "Creating comprehensive PR reports faster", value: 22 },
    {
      label: "Improving the look & feel of press releases and PR pitches",
      value: 19,
    },
    { label: "Other", value: 5 },
  ],
  2023: [
    { label: "Securing top tier publication", value: 45 },
    { label: "Tracking & measuring PR efforts", value: 38 },
    {
      label: "Having a better understanding of media contacts and their beat",
      value: 29,
    },
    { label: "Managing my daily PR activities more efficiently", value: 29 },
    { label: "Creating comprehensive PR reports faster", value: 17 },
    {
      label: "Improving the look & feel of press releases and PR pitches",
      value: 18,
    },
    { label: "Other", value: 3 },
  ],
  2022: [
    { label: "Securing top tier publication", value: 45 },
    { label: "Tracking & measuring PR efforts", value: 23 },
    {
      label: "Having a better understanding of media contacts and their beat",
      value: 29,
    },
    { label: "Managing my daily PR activities more efficiently", value: 23 },
    { label: "Creating comprehensive PR reports faster", value: 6 },
    {
      label: "Improving the look & feel of press releases and PR pitches",
      value: 13,
    },
    { label: "Other", value: 5 },
  ],
};

const PRBarGraph = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2024");
  const [view, setView] = useState("graph");
  const containerRef = useRef(null);

  const maxValue = Math.max(
    ...yearData[selectedYear].map((item) => item.value || 0)
  );

  const calculateHeight = (value) => {
    return value ? `${(value / maxValue) * 100}%` : "0%";
  };

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

  const handleViewChange = (year) => {
    if (year === "Table") {
      setView("table");
    } else {
      setView("graph");
      setSelectedYear(year);
    }
  };

  const renderBarGraph = () => (
    <div className={styles.graphContainer}>
      {yearData[selectedYear].map((item, index) => (
        <div key={index} className={styles.barGroup}>
          <div className={styles.barContainer}>
            <div
              className={`${styles.bar} ${isVisible ? styles.animate : ""}`}
              style={{
                "--height": calculateHeight(item.value),
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <span className={styles.barValue}>{item.value}%</span>
            </div>
          </div>
          <div className={styles.label}>{item.label}</div>
        </div>
      ))}
    </div>
  );

  const renderTable = () => (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>Improvement Area</th>
            <th className={styles.tableHeader}>2024</th>
            <th className={styles.tableHeader}>2023</th>
            <th className={styles.tableHeader}>2022</th>
          </tr>
        </thead>
        <tbody>
          {yearData["2024"].map((item, index) => (
            <tr key={index} className={styles.tableRow}>
              <td className={styles.tableCell}>{item.label}</td>
              <td className={styles.tableCell}>
                {yearData["2024"][index].value}%
              </td>
              <td className={styles.tableCell}>
                {yearData["2023"][index].value}%
              </td>
              <td className={styles.tableCell}>
                {yearData["2022"][index].value}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className={styles.container} ref={containerRef}>
      <h2 className={styles.title}>
        What's the one thing you'd most like
        <span className={styles.highlight}>
          to improve in your PR work right now?
        </span>
      </h2>

      <div className={styles.yearSelector}>
        <button
          className={`${styles.yearButton} ${
            view === "graph" && selectedYear === "2024" ? styles.active : ""
          }`}
          onClick={() => handleViewChange("2024")}
        >
          2024
        </button>
        <button
          className={`${styles.yearButton} ${
            view === "graph" && selectedYear === "2023" ? styles.active : ""
          }`}
          onClick={() => handleViewChange("2023")}
        >
          2023
        </button>
        <button
          className={`${styles.yearButton} ${
            view === "graph" && selectedYear === "2022" ? styles.active : ""
          }`}
          onClick={() => handleViewChange("2022")}
        >
          2022
        </button>
        <button
          className={`${styles.yearButton} ${
            view === "table" ? styles.active : ""
          }`}
          onClick={() => handleViewChange("Table")}
        >
          Table
        </button>
      </div>

      {view === "table" ? renderTable() : renderBarGraph()}
    </div>
  );
};

export default PRBarGraph;
