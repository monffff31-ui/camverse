# CamVerse 📷

**"ลองก่อนเข้าใจ — เลือกกล้องจากภาพที่คุณอยากได้"**

CamVerse คือเว็บแนะนำกล้องแบบ **Interactive Camera Experience** ที่รวม
*ร้านลองกล้อง + คู่มือ + รีวิว + Simulator* ไว้ในที่เดียว เน้นให้ผู้ใช้เห็นว่า
"ภาพจากกล้องแต่ละรุ่นออกมาเป็นยังไง" และ "ใช้งานยังไงจริง"

## ฟีเจอร์

- **Hero** — เลือกหมวดสไตล์ภาพ (Portrait / Landscape / Night / Street / Cinematic / Vlog)
- **Camera Explorer** — รวมกล้องทั้งหมด พร้อมตัวกรอง (แบรนด์ / ราคา / การใช้งาน / ระดับผู้ใช้) และการเรียงลำดับ
- **Style Preview** — ดูภาพเดียวกันในโทนของกล้องแต่ละรุ่น (จำลองสีด้วย CSS filter ตาม color science ของแต่ละแบรนด์)
- **Interactive Camera Body** — คลิก/ชี้ปุ่มบนกล้องเพื่อดูชื่อปุ่ม หน้าที่ และตอนที่ควรใช้
- **Camera Simulator** — ปรับ ISO / Shutter / Aperture / White Balance แล้วภาพ preview เปลี่ยนตามจริง
- **Compare** — เปรียบเทียบสเปกกล้อง 2 รุ่นแบบเทียบกันชัด ๆ

> หมายเหตุ: นี่คือ concept demo — รูปภาพตัวอย่างดึงจาก Unsplash และข้อมูลกล้องเป็นข้อมูลสาธิต

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) (build tool / dev server)
- CSS ล้วน (ไม่มี UI framework) — ดีไซน์ระบบอยู่ใน `src/index.css`

## เริ่มใช้งาน

```bash
npm install      # ติดตั้ง dependencies
npm run dev      # รัน dev server (http://localhost:5173)
npm run build    # build สำหรับ production -> dist/
npm run preview  # พรีวิว build ที่ได้
npm run lint     # ตรวจ ESLint
```

## โครงสร้างโปรเจกต์

```
src/
├── components/   # ส่วนประกอบ UI แต่ละ section
├── data/         # ข้อมูลกล้อง (cameras.ts) และสไตล์ภาพ (styles.ts)
├── App.tsx       # ประกอบหน้าทั้งหมด
├── main.tsx      # entry point
└── index.css     # design system + สไตล์ทั้งหมด
```
