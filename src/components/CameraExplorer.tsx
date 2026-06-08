import { useMemo, useState } from "react";
import {
  cameras,
  brands,
  priceRanges,
  type Brand,
  type UseCase,
  type Level,
} from "../data/cameras";

const useCaseOptions: { id: UseCase; label: string }[] = [
  { id: "photo", label: "ถ่ายภาพ" },
  { id: "video", label: "วิดีโอ" },
  { id: "hybrid", label: "ทั้งภาพและวิดีโอ" },
];

const levelOptions: { id: Level; label: string }[] = [
  { id: "beginner", label: "มือใหม่" },
  { id: "enthusiast", label: "ระดับกลาง" },
  { id: "pro", label: "มืออาชีพ" },
];

type SortKey = "recommended" | "price-asc" | "price-desc" | "rating";

function toggle<T>(arr: T[], val: T): T[] {
  return arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val];
}

function Stars({ value }: { value: number }) {
  const full = Math.round(value);
  return (
    <span className="stars" aria-label={`${value} ดาว`}>
      {"★".repeat(full)}
      {"☆".repeat(5 - full)}
    </span>
  );
}

export default function CameraExplorer() {
  const [selBrands, setSelBrands] = useState<Brand[]>([]);
  const [selPrice, setSelPrice] = useState<string[]>([]);
  const [selUse, setSelUse] = useState<UseCase[]>([]);
  const [selLevel, setSelLevel] = useState<Level[]>([]);
  const [sort, setSort] = useState<SortKey>("recommended");

  const filtered = useMemo(() => {
    let list = cameras.filter((c) => {
      if (selBrands.length && !selBrands.includes(c.brand)) return false;
      if (selUse.length && !selUse.some((u) => c.useCases.includes(u)))
        return false;
      if (selLevel.length && !selLevel.includes(c.level)) return false;
      if (selPrice.length) {
        const inRange = priceRanges
          .filter((r) => selPrice.includes(r.label))
          .some((r) => c.price >= r.min && c.price < r.max);
        if (!inRange) return false;
      }
      return true;
    });

    list = [...list];
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [selBrands, selPrice, selUse, selLevel, sort]);

  const hasFilters =
    selBrands.length || selPrice.length || selUse.length || selLevel.length;

  function clearAll() {
    setSelBrands([]);
    setSelPrice([]);
    setSelUse([]);
    setSelLevel([]);
  }

  return (
    <section id="explorer" className="section container">
      <h2 className="section-title">กล้องทั้งหมด</h2>
      <p className="section-sub">กรองตามแบรนด์ ราคา และการใช้งานที่คุณต้องการ</p>

      <div className="explorer-grid">
        <aside className="filters">
          <div className="filters-head">
            <h3>ตัวกรอง</h3>
            {hasFilters ? (
              <button className="filters-clear" onClick={clearAll}>
                ล้างทั้งหมด
              </button>
            ) : null}
          </div>

          <div className="filter-group">
            <h4>แบรนด์</h4>
            {brands.map((b) => (
              <label key={b} className="check">
                <input
                  type="checkbox"
                  checked={selBrands.includes(b)}
                  onChange={() => setSelBrands((s) => toggle(s, b))}
                />
                {b}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h4>ช่วงราคา</h4>
            {priceRanges.map((r) => (
              <label key={r.label} className="check">
                <input
                  type="checkbox"
                  checked={selPrice.includes(r.label)}
                  onChange={() => setSelPrice((s) => toggle(s, r.label))}
                />
                {r.label}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h4>ประเภทการใช้งาน</h4>
            {useCaseOptions.map((u) => (
              <label key={u.id} className="check">
                <input
                  type="checkbox"
                  checked={selUse.includes(u.id)}
                  onChange={() => setSelUse((s) => toggle(s, u.id))}
                />
                {u.label}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h4>ระดับผู้ใช้</h4>
            {levelOptions.map((lv) => (
              <label key={lv.id} className="check">
                <input
                  type="checkbox"
                  checked={selLevel.includes(lv.id)}
                  onChange={() => setSelLevel((s) => toggle(s, lv.id))}
                />
                {lv.label}
              </label>
            ))}
          </div>
        </aside>

        <div>
          <div className="explorer-toolbar">
            <span className="result-count">พบ {filtered.length} รุ่น</span>
            <select
              className="select"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
            >
              <option value="recommended">เรียงตาม: แนะนำ</option>
              <option value="price-asc">ราคา: น้อยไปมาก</option>
              <option value="price-desc">ราคา: มากไปน้อย</option>
              <option value="rating">คะแนนสูงสุด</option>
            </select>
          </div>

          <div className="cards">
            {filtered.length === 0 ? (
              <div className="empty">ไม่พบกล้องที่ตรงกับตัวกรอง ลองปรับตัวกรองดูครับ</div>
            ) : (
              filtered.map((c, i) => (
                <article key={c.id} className="card">
                  {i === 0 && sort === "recommended" ? (
                    <span className="card-badge badge badge-accent">แนะนำ</span>
                  ) : null}
                  <div className="card-img">
                    <span className="cam-emoji">📷</span>
                  </div>
                  <div className="card-body">
                    <div className="card-title">
                      <h3>{c.name}</h3>
                      <span className="card-price">
                        ฿{c.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="spec-pills">
                      <span className="spec-pill">{c.sensor}</span>
                      <span className="spec-pill">{c.megapixels}</span>
                      <span className="spec-pill">{c.video}</span>
                    </div>
                    <p className="card-tone">{c.tone}</p>
                    <div className="card-rating">
                      <Stars value={c.rating} />
                      {c.rating.toFixed(1)} ({c.ratingCount} รีวิว)
                    </div>
                    <div className="card-actions">
                      <button
                        className="btn btn-ghost btn-sm"
                        onClick={() =>
                          document
                            .getElementById("styles")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                      >
                        ดูตัวอย่างภาพ
                      </button>
                      <button
                        className="btn btn-ghost btn-sm"
                        onClick={() =>
                          document
                            .getElementById("body")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                      >
                        ดูปุ่มกล้อง
                      </button>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() =>
                          document
                            .getElementById("simulator")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                      >
                        ลองจำลอง
                      </button>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
