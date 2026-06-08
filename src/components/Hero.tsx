import { heroCategories } from "../data/styles";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section id="home" className="container">
      <div className="hero">
        <div className="hero-grid">
          <div>
            <h1>
              เลือกกล้องจาก
              <br />
              ภาพที่คุณอยากได้
            </h1>
            <p>
              ดูโทนภาพจริงจากกล้องแต่ละรุ่น เปรียบเทียบทุกมุมมอง
              เรียนรู้การใช้งานแบบมืออาชีพ — ลองก่อนเข้าใจ ก่อนตัดสินใจซื้อ
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => scrollTo("compare")}>
                เปรียบเทียบกล้อง
              </button>
              <button className="btn btn-ghost" onClick={() => scrollTo("simulator")}>
                ลองจำลองกล้อง
              </button>
              <button className="btn btn-ghost" onClick={() => scrollTo("styles")}>
                ดูโทนภาพ
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80"
              alt="กล้องหลายรุ่น"
              loading="lazy"
            />
          </div>
        </div>

        <div className="hero-cats">
          {heroCategories.map((c) => (
            <div
              key={c.id}
              className="hero-cat"
              onClick={() => scrollTo("styles")}
            >
              <img src={c.image} alt={c.label} loading="lazy" />
              <div className="hero-cat-overlay">
                <strong>{c.label}</strong>
                <span>{c.labelTh}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
