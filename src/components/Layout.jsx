import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const navItems = [
    { id: "02", title: "Table of Contents" },
    { id: "03", title: "Key Findings" },
    { id: "04", title: "Pain Points in PR" },
    { id: "05", title: "The Use of PR Tools", active: true },
    { id: "06", title: "AI in PR: Promise or Pitfall?" },
    { id: "07", title: "What's Next in PR Tech" },
    { id: "08", title: "About Prowly" },
  ];

  return (
    <div className={styles.layout}>
      <nav className={styles.sidebar}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`${styles.navButton} ${
                  item.active ? styles.active : ""
                }`}
              >
                <span className={styles.navNumber}>{item.id}</span>
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        <button className={styles.downloadButton}>
          DOWNLOAD PDF
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3V13M10 13L6 9M10 13L14 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 15V16C3 16.5523 3.44772 17 4 17H16C16.5523 17 17 16.5523 17 16V15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default Layout;
