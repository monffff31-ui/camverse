const links = [
  { id: "home", label: "หน้าหลัก" },
  { id: "explorer", label: "กล้องทั้งหมด" },
  { id: "compare", label: "เปรียบเทียบ" },
  { id: "simulator", label: "จำลองกล้อง" },
  { id: "body", label: "ปุ่มกล้อง" },
  { id: "guide", label: "คอมมูนิตี้" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="logo" onClick={() => scrollTo("home")}>
          CAM<span>VERSE</span>
        </div>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.id} onClick={() => scrollTo(l.id)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <div className="nav-icon" title="ค้นหา">
            🔍
          </div>
          <div className="nav-icon" title="แจ้งเตือน">
            🔔
          </div>
          <div className="nav-avatar" />
        </div>
      </div>
    </header>
  );
}
