const features = [
  {
    icon: "✨",
    title: "AI แนะนำกล้อง",
    desc: "ตอบคำถามไม่กี่ข้อ แล้ว AI ช่วยเลือกรุ่นที่ใช่สำหรับสไตล์คุณ",
  },
  {
    icon: "🎛️",
    title: "จำลองเมนูกล้อง",
    desc: "ลองกดปุ่มและเมนูเสมือนจริง ก่อนถือกล้องของจริง",
  },
  {
    icon: "👥",
    title: "คอมมูนิตี้",
    desc: "แชร์ภาพ แลกเปลี่ยนเทคนิค และผลงานกับช่างภาพคนอื่น",
  },
  {
    icon: "📚",
    title: "บทความและคู่มือ",
    desc: "รวมความรู้การถ่ายภาพ ตั้งแต่พื้นฐานจนถึงระดับโปร",
  },
];

export default function FeatureCards() {
  return (
    <section id="guide" className="section container">
      <div className="feature-cards">
        {features.map((f) => (
          <div key={f.title} className="feature-card">
            <div className="feature-ic">{f.icon}</div>
            <div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
