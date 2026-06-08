import { useState } from "react";
import { cameras } from "../data/cameras";
import { styleCategories, brandLook } from "../data/styles";

export default function StylePreview() {
  const [camId, setCamId] = useState(cameras[0].id);
  const [catId, setCatId] = useState(styleCategories[0].id);

  const cam = cameras.find((c) => c.id === camId)!;
  const filter = brandLook[cam.brand] ?? "none";

  return (
    <section id="styles" className="panel">
      <h2 className="section-title">ดูสไตล์ภาพจากกล้องแต่ละรุ่น</h2>
      <p className="section-sub">
        ภาพเดียวกันจะให้โทนต่างกันตามกล้องที่เลือก — เลือกรุ่นแล้วดูผลลัพธ์
      </p>

      <div className="style-tabs">
        {cameras.map((c) => (
          <button
            key={c.id}
            className={"style-tab" + (c.id === camId ? " active" : "")}
            onClick={() => setCamId(c.id)}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="style-cat-tabs">
        {styleCategories.map((cat) => (
          <button
            key={cat.id}
            className={"style-cat-tab" + (cat.id === catId ? " active" : "")}
            onClick={() => setCatId(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="style-gallery">
        {styleCategories.map((cat) => (
          <div
            key={cat.id}
            className="style-frame"
            style={{ outline: cat.id === catId ? "2px solid var(--accent)" : "none" }}
          >
            <img
              src={cat.image}
              alt={cat.label}
              loading="lazy"
              style={{ filter }}
            />
            <div className="style-frame-label">
              <strong>{cat.label}</strong>
              <span>{cat.labelTh}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="style-note">
        โทนภาพจาก <b style={{ color: "var(--text)" }}>{cam.name}</b> — {cam.tone}
      </div>
    </section>
  );
}
