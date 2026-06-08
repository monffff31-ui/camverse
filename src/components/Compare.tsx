import { useState } from "react";
import { cameras } from "../data/cameras";

const rows: { key: string; label: string; get: (id: string) => string }[] = [
  { key: "sensor", label: "Sensor", get: (id) => find(id).sensor },
  { key: "mp", label: "ความละเอียด", get: (id) => find(id).megapixels },
  { key: "processor", label: "Processor", get: (id) => find(id).specs.processor },
  { key: "af", label: "AF System", get: (id) => find(id).specs.af },
  { key: "ibis", label: "กันสั่น", get: (id) => find(id).specs.stabilization },
  { key: "video", label: "Video", get: (id) => find(id).video },
  { key: "weight", label: "น้ำหนัก", get: (id) => find(id).specs.weight },
  {
    key: "price",
    label: "ราคา",
    get: (id) => "฿" + find(id).price.toLocaleString(),
  },
];

function find(id: string) {
  return cameras.find((c) => c.id === id)!;
}

export default function Compare() {
  const [a, setA] = useState(cameras[0].id);
  const [b, setB] = useState(cameras[1].id);

  return (
    <section id="compare" className="panel">
      <h2 className="section-title">เปรียบเทียบกล้อง</h2>
      <p className="section-sub">เลือก 2 รุ่นเพื่อดูสเปกแบบเทียบกันชัด ๆ</p>

      <div className="compare-selects">
        <select className="select" value={a} onChange={(e) => setA(e.target.value)}>
          {cameras.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <span className="compare-vs">VS</span>
        <select className="select" value={b} onChange={(e) => setB(e.target.value)}>
          {cameras.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <table className="compare-table">
        <tbody>
          <tr className="compare-head">
            <th></th>
            <td>{find(a).name}</td>
            <td>{find(b).name}</td>
          </tr>
          {rows.map((r) => (
            <tr key={r.key}>
              <th>{r.label}</th>
              <td>{r.get(a)}</td>
              <td>{r.get(b)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="compare-actions">
        <button
          className="btn btn-ghost"
          onClick={() =>
            document.getElementById("styles")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          ดูเปรียบเทียบภาพ
        </button>
        <button
          className="btn btn-primary"
          onClick={() =>
            document.getElementById("body")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          ดู UI ปุ่มกล้อง
        </button>
      </div>
    </section>
  );
}
