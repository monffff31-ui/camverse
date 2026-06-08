export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="logo">
          CAM<span>VERSE</span>
        </div>
        <div>ลองก่อนเข้าใจ — เลือกกล้องจากภาพที่คุณอยากได้</div>
        <div>© {new Date().getFullYear()} CamVerse. Concept demo.</div>
      </div>
    </footer>
  );
}
