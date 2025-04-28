const Sidebar = () => {
  const menuItems = [
    { id: "01", title: "Introduction" },
    { id: "02", title: "Table of Contents" },
    { id: "03", title: "Key Findings" },
    { id: "04", title: "Pain Points in PR" },
    { id: "05", title: "The Use of PR Tools" },
    { id: "06", title: "AI in PR: Promise or Pitfall?" },
    { id: "07", title: "What's Next in PR Tech" },
    { id: "08", title: "About Prowly" },
  ];

  return (
    <aside className="sidebar">
      <h1 className="logo">Prowly</h1>
      <nav>
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <span className="number">{item.id}</span>
            <span className="title">{item.title}</span>
          </div>
        ))}
      </nav>
      <button className="download-btn">DOWNLOAD PDF ↓</button>
    </aside>
  );
};

export default Sidebar;