import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const menuItems = [
    { id: "02", title: "Table of Contents" },
    { id: "03", title: "Key Findings" },
    { id: "04", title: "Pain Points in PR" },
    { id: "05", title: "The Use of PR Tools", active: true },
    { id: "06", title: "AI in PR: Promise or Pitfall?" },
    { id: "07", title: "What's Next in PR Tech" },
    { id: "08", title: "About Prowly" },
  ];

  return (
    <nav className={styles.navigation}>
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li key={item.id} className={styles.menuItem}>
            <button
              className={`${styles.menuButton} ${
                item.active ? styles.active : ""
              }`}
            >
              <span className={styles.menuId}>{item.id}</span>
              {item.title}
            </button>
          </li>
        ))}
      </ul>
      <button className={styles.downloadButton}>DOWNLOAD PDF ↓</button>
    </nav>
  );
};

export default Navigation;
