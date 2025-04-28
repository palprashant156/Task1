import { useEffect, useState, useRef } from "react";
import GrowingPains from "./GrowingPains";
import PRChallenges from "./PRChallenges";
import PRStrategy from "./PRStrategy";
import PRToolsAdoption from "./PRToolsAdoption";
import PRToolsPieChart from "./PRToolsPieChart";
import PRToolsReasons from "./PRToolsReasons";

const Sidebar = ({ scrollToSection, isMenuOpen, activeSection }) => {
  const menuItems = [
    { id: "introduction", number: "01", title: "Introduction" },
    { id: "table-of-contents", number: "02", title: "Table of Contents" },
    { id: "key-findings", number: "03", title: "Key Findings" },
    { id: "pain-points", number: "04", title: "Pain Points in PR" },
    { id: "pr-tools", number: "05", title: "The Use of PR Tools" },
    { id: "ai-pr", number: "06", title: "AI in PR: Promise or Pitfall?" },
  ];

  return (
    <div className={`sidebar ${isMenuOpen ? "active" : ""}`}>
      <div className="logo">Prowly</div>
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`menu-item ${activeSection === item.id ? "active" : ""}`}
            onClick={() => scrollToSection(item.id)}
          >
            <span className="number">{item.number}</span>
            {item.title}
          </button>
        ))}
      </nav>
      <button className="download-btn">Download Report</button>
    </div>
  );
};

const MainContent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeSection, setActiveSection] = useState("introduction");

  const findingsGridRef = useRef(null);
  const scrollbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);

      // Calculate which section is currently in view
      const sections = [
        "introduction",
        "table-of-contents",
        "key-findings",
        "pain-points",
        "pr-tools",
        "ai-pr",
      ];

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const offset = 200; // Offset to trigger active state earlier
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFindingsScroll = () => {
    if (findingsGridRef.current) {
      const element = findingsGridRef.current;
      const scrollLeft = element.scrollLeft;
      const maxScroll = element.scrollWidth - element.clientWidth;
      const progress = (scrollLeft / maxScroll) * 100;
      setScrollProgress(progress);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const scrollbar = scrollbarRef.current;
    if (scrollbar) {
      const rect = scrollbar.getBoundingClientRect();
      const scrollPercentage = (e.clientX - rect.left) / rect.width;
      const findingsGrid = findingsGridRef.current;
      if (findingsGrid) {
        const maxScroll = findingsGrid.scrollWidth - findingsGrid.clientWidth;
        findingsGrid.scrollLeft = maxScroll * scrollPercentage;
      }
    }
    setStartX(e.pageX - scrollbarRef.current.offsetLeft);
    setScrollLeft(scrollbarRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const scrollbar = scrollbarRef.current;
    const findingsGrid = findingsGridRef.current;
    if (scrollbar && findingsGrid) {
      const rect = scrollbar.getBoundingClientRect();
      const scrollPercentage = (e.clientX - rect.left) / rect.width;
      const maxScroll = findingsGrid.scrollWidth - findingsGrid.clientWidth;
      findingsGrid.scrollLeft = maxScroll * scrollPercentage;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    const findingsGrid = findingsGridRef.current;
    if (findingsGrid) {
      findingsGrid.addEventListener("scroll", handleFindingsScroll);
      return () =>
        findingsGrid.removeEventListener("scroll", handleFindingsScroll);
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu after clicking on mobile
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </button>
      <Sidebar
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        activeSection={activeSection}
      />
      <div className="main-content">
        <div className="content-wrapper">
          <div className="header-section">
            <div className="header-card">
              <div className="header-text">
                <h1>The State of PR Technology 2024</h1>
                <p className="subtitle">
                  A complete overview of trends & pain points in public
                  relations software
                </p>
              </div>

              <div className="animated-background">
                <img src="/src/assets/horse.gif" alt="Animated horse" />
              </div>
            </div>
          </div>

          <div className="scrollable-content">
            <section className="content-section" id="introduction">
              <h2 className="section-title">Introduction</h2>
              <div className="section-content">
                <p className="main-text">
                  PR is rapidly shifting towards an ROI-driven model, with
                  growing pressure to deliver measurable results that directly
                  impact the bottom line.
                </p>
                <p className="stat-text">
                  Our study reveals that over{" "}
                  <span className="highlight">
                    57% of PR professionals are struggling with tight budgets
                  </span>
                  , pushing them to embrace advanced tools and data-driven
                  strategies. With an emphasis on sales metrics in PR
                  measurement rising sharply, the question arises: how are PR
                  practitioners adapting to the changes?
                </p>
                <p className="conclusion-text">
                  Dive into our study to explore how PR is evolving to meet the
                  needs of the tech-savvy, ROI-focused landscape.
                </p>
              </div>
            </section>

            <section className="content-section" id="table-of-contents">
              <h2 className="section-title">Table of Contents</h2>
              <div className="section-content">
                <div className="toc-grid">
                  <div
                    className="toc-item"
                    onClick={() => scrollToSection("introduction")}
                  >
                    <span className="toc-number">01</span>
                    <h3>Introduction</h3>
                  </div>
                  <div
                    className="toc-item"
                    onClick={() => scrollToSection("table-of-contents")}
                  >
                    <span className="toc-number">02</span>
                    <h3>Table of Contents</h3>
                  </div>
                  <div
                    className="toc-item"
                    onClick={() => scrollToSection("key-findings")}
                  >
                    <span className="toc-number">03</span>
                    <h3>Key Findings</h3>
                  </div>
                  <div
                    className="toc-item"
                    onClick={() => scrollToSection("pain-points")}
                  >
                    <span className="toc-number">04</span>
                    <h3>Pain Points in PR</h3>
                  </div>
                  <div
                    className="toc-item"
                    onClick={() => scrollToSection("pr-tools")}
                  >
                    <span className="toc-number">05</span>
                    <h3>The Use of PR Tools</h3>
                  </div>
                  <div
                    className="toc-item"
                    onClick={() => scrollToSection("ai-pr")}
                  >
                    <span className="toc-number">06</span>
                    <h3>AI in PR: Promise or Pitfall?</h3>
                  </div>
                </div>
              </div>
            </section>

            <section className="content-section" id="key-findings">
              <h2 className="section-title">Key Findings</h2>
              <div className="findings-section">
                <div className="findings-grid" ref={findingsGridRef}>
                  <div className="finding-card">
                    <div className="finding-image">
                      <img
                        src="/images/tracking-icon.svg"
                        alt="Tracking and measuring"
                      />
                    </div>
                    <h3>Tracking and measuring PR efforts</h3>
                    <p>
                      The importance of tracking and measuring PR efforts has
                      surged, with <strong>38%</strong> of professionals
                      prioritizing this in 2024, up from just{" "}
                      <strong>23%</strong> in 2022.
                    </p>
                  </div>

                  <div className="finding-card">
                    <div className="finding-image">
                      <img
                        src="/images/outreach-icon.svg"
                        alt="Effective outreach"
                      />
                    </div>
                    <h3>Effective outreach</h3>
                    <p>
                      The use of regular email services for pitches has
                      plummeted from <strong>74%</strong> in 2022 to{" "}
                      <strong>50%</strong> in 2024, signaling a move towards
                      specialized tools for more effective outreach.
                    </p>
                  </div>

                  <div className="finding-card">
                    <div className="finding-image">
                      <img src="/images/ai-icon.svg" alt="AI Integration" />
                    </div>
                    <h3>AI Integration</h3>
                    <p>
                      <strong>65%</strong> of PR professionals now use
                      AI-powered tools for content creation and analysis,
                      marking a significant shift in the industry.
                    </p>
                  </div>

                  <div className="finding-card">
                    <div className="finding-image">
                      <img
                        src="/images/data-icon.svg"
                        alt="Data-Driven Decisions"
                      />
                    </div>
                    <h3>Data-Driven Decisions</h3>
                    <p>
                      <strong>82%</strong> of successful PR campaigns in 2024
                      relied on data analytics for strategy development and
                      measurement.
                    </p>
                  </div>
                </div>
                <div
                  className="horizontal-scrollbar"
                  ref={scrollbarRef}
                  onMouseDown={handleMouseDown}
                >
                  <div
                    className="scrollbar-thumb"
                    style={{
                      left: `${scrollProgress}%`,
                      width: "20%",
                    }}
                  />
                </div>
              </div>
            </section>

            <section className="content-section" id="pain-points">
              <GrowingPains />
              <PRChallenges />
              <PRStrategy />
            </section>

            <section className="content-section" id="pr-tools">
              <h2 className="section-title">The Use of PR Tools</h2>
              <div className="section-content">
                <PRToolsAdoption />
                <PRToolsPieChart />
                <PRToolsReasons />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
