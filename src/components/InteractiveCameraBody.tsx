import { useState } from "react";

interface Btn {
  id: string;
  label: string;
  // position in % over the stage
  x: number;
  y: number;
  short: string;
  desc: string;
  when: string;
  range?: string;
}

const buttons: Btn[] = [
  {
    id: "iso",
    label: "ISO",
    x: 72,
    y: 30,
    short: "ปรับความไวแสง",
    desc: "ใช้เพิ่ม/ลดความสว่างของภาพในที่แสงน้อย ยิ่งสูงยิ่งสว่างแต่ Noise มากขึ้น",
    when: "ถ่ายในที่มืดหรือกลางคืน",
    range: "100 - 3200 (แนะนำ)",
  },
  {
    id: "af-on",
    label: "AF-ON",
    x: 78,
    y: 22,
    short: "สั่งโฟกัส",
    desc: "ปุ่มสั่งให้กล้องโฟกัสแยกจากปุ่มชัตเตอร์ (Back-button focus)",
    when: "ถ่ายภาพเคลื่อนไหว / ล็อกโฟกัส",
  },
  {
    id: "ael",
    label: "AEL",
    x: 84,
    y: 30,
    short: "ล็อกค่าแสง",
    desc: "ล็อกค่าการวัดแสงไว้ ไม่ให้เปลี่ยนเมื่อจัดองค์ประกอบใหม่",
    when: "แสงในเฟรมไม่สม่ำเสมอ",
  },
  {
    id: "fn",
    label: "Fn",
    x: 70,
    y: 50,
    short: "เมนูลัด",
    desc: "เปิดเมนูตั้งค่าที่ใช้บ่อย ปรับได้รวดเร็วโดยไม่ต้องเข้าเมนูหลัก",
    when: "ปรับหลายค่าระหว่างถ่าย",
  },
  {
    id: "disp",
    label: "DISP",
    x: 30,
    y: 70,
    short: "ปรับการแสดงผล",
    desc: "สลับข้อมูลบนจอ เช่น เส้นกริด ฮิสโตแกรม ระดับน้ำ",
    when: "ต้องการดูข้อมูลเสริมบนจอ",
  },
  {
    id: "playback",
    label: "Playback",
    x: 30,
    y: 84,
    short: "ดูภาพที่ถ่าย",
    desc: "เปิดดูภาพและวิดีโอที่บันทึกไว้ ซูมเช็คโฟกัสได้",
    when: "ตรวจผลงานหลังกดถ่าย",
  },
  {
    id: "menu",
    label: "MENU",
    x: 22,
    y: 22,
    short: "เมนูหลัก",
    desc: "เข้าถึงการตั้งค่าทั้งหมดของกล้อง เช่น คุณภาพไฟล์ โฟลเดอร์ ระบบ",
    when: "ตั้งค่าเริ่มต้นของกล้อง",
  },
  {
    id: "record",
    label: "REC",
    x: 64,
    y: 18,
    short: "อัดวิดีโอ",
    desc: "เริ่ม/หยุดการบันทึกวิดีโอได้ทันทีจากโหมดใดก็ได้",
    when: "ถ่ายวิดีโอ / Vlog",
  },
];

export default function InteractiveCameraBody() {
  const [activeId, setActiveId] = useState<string>("iso");
  const active = buttons.find((b) => b.id === activeId)!;

  return (
    <section id="body" className="section container">
      <h2 className="section-title">เรียนรู้ปุ่มและการใช้งาน</h2>
      <p className="section-sub">คลิกที่ปุ่มบนกล้องเพื่อดูหน้าที่และวิธีใช้งานจริง</p>

      <div className="panel">
        <div className="camera-body-wrap">
          <div className="camera-stage">
            <CameraSVG />
            {buttons.map((b) => (
              <button
                key={b.id}
                className={"hotspot" + (b.id === activeId ? " active" : "")}
                style={{ left: `${b.x}%`, top: `${b.y}%` }}
                onMouseEnter={() => setActiveId(b.id)}
                onClick={() => setActiveId(b.id)}
                aria-label={b.label}
              >
                {b.id === activeId ? (
                  <span className="hotspot-tip">
                    <strong>{b.label}</strong>
                    <span>{b.short}</span>
                  </span>
                ) : null}
              </button>
            ))}
          </div>

          <div className="camera-info">
            <div className="ci-label">{active.label}</div>
            <h3>{active.short}</h3>
            <p>{active.desc}</p>
            {active.range ? (
              <p style={{ color: "var(--accent-2)", fontWeight: 600 }}>
                ช่วงที่แนะนำ: {active.range}
              </p>
            ) : null}
            <div className="ci-meta">
              ใช้ตอนไหน: <b>{active.when}</b>
            </div>
            <div className="hint-row">
              ◦ เลื่อนเมาส์ไปบนจุดสีฟ้าบนกล้องเพื่อสำรวจปุ่มอื่น ๆ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CameraSVG() {
  return (
    <svg
      viewBox="0 0 420 260"
      width="100%"
      style={{ maxWidth: 420 }}
      role="img"
      aria-label="ภาพด้านหลังกล้อง"
    >
      <defs>
        <linearGradient id="bodyG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#34383f" />
          <stop offset="1" stopColor="#1a1d22" />
        </linearGradient>
        <linearGradient id="screenG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2b3a4a" />
          <stop offset="1" stopColor="#0e151c" />
        </linearGradient>
      </defs>
      {/* body */}
      <rect x="20" y="40" width="380" height="200" rx="18" fill="url(#bodyG)" stroke="#0c0d10" strokeWidth="2" />
      {/* viewfinder hump */}
      <rect x="150" y="20" width="80" height="34" rx="8" fill="#26292f" />
      {/* screen */}
      <rect x="40" y="70" width="170" height="130" rx="8" fill="url(#screenG)" stroke="#0c0d10" strokeWidth="2" />
      <rect x="48" y="78" width="154" height="60" rx="4" fill="#10212d" opacity="0.8" />
      {/* mode dial */}
      <circle cx="270" cy="60" r="20" fill="#222529" stroke="#3a3f47" strokeWidth="2" />
      <circle cx="270" cy="60" r="6" fill="#3a3f47" />
      {/* thumb dial */}
      <circle cx="350" cy="90" r="16" fill="#222529" stroke="#3a3f47" strokeWidth="2" />
      {/* control wheel */}
      <circle cx="300" cy="150" r="34" fill="#1c1f24" stroke="#3a3f47" strokeWidth="2" />
      <circle cx="300" cy="150" r="13" fill="#26292f" stroke="#3a3f47" strokeWidth="1.5" />
      {/* small buttons */}
      <circle cx="240" cy="120" r="7" fill="#26292f" />
      <circle cx="240" cy="200" r="7" fill="#26292f" />
      {/* grip */}
      <path d="M20 58 q-12 70 8 160 q14 8 22 0 v-178 z" fill="#202327" opacity="0.9" />
    </svg>
  );
}
