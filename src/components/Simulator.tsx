import { useMemo, useState } from "react";

const ISO_VALUES = [100, 200, 400, 800, 1600, 3200, 6400, 12800];
const SHUTTER = [
  "1/4000",
  "1/2000",
  "1/1000",
  "1/500",
  "1/250",
  "1/125",
  "1/60",
  "1/30",
  "1/15",
  "1/8",
  "1/4",
  '1"',
];
const APERTURE = [1.4, 2, 2.8, 4, 5.6, 8, 11, 16];

// baseline indices considered "balanced exposure"
const ISO_BASE = 2; // 400
const SHUTTER_BASE = 5; // 1/125
const APER_BASE = 4; // f/5.6

const DEFAULTS = { iso: ISO_BASE, shutter: SHUTTER_BASE, aper: APER_BASE, wb: 5500 };

const PREVIEW_IMG =
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80";

export default function Simulator() {
  const [iso, setIso] = useState(DEFAULTS.iso);
  const [shutter, setShutter] = useState(DEFAULTS.shutter);
  const [aper, setAper] = useState(DEFAULTS.aper);
  const [wb, setWb] = useState(DEFAULTS.wb);

  const { filter, blur, grain } = useMemo(() => {
    // each index step from baseline is ~1 stop of light
    const isoStops = iso - ISO_BASE;
    const shutterStops = shutter - SHUTTER_BASE; // slower = more light
    const aperStops = APER_BASE - aper; // wider (lower f) = more light
    const totalStops = isoStops + shutterStops + aperStops;
    const brightness = Math.min(2.4, Math.max(0.35, Math.pow(2, totalStops * 0.18)));

    // white balance: <5500 cooler (blue), >5500 warmer (orange)
    const wbDelta = (wb - 5500) / 4500; // -0.67 .. 0.78
    const sepia = Math.max(0, wbDelta) * 0.5;
    const hue = wbDelta < 0 ? wbDelta * 25 : wbDelta * 12; // cooler shifts blue
    const warmth = wbDelta < 0 ? "saturate(1.05)" : "saturate(1.1)";

    // high ISO -> noise + lower contrast
    const noise = Math.max(0, iso - 3); // index above 800
    const contrast = 1 - noise * 0.04;

    const f =
      `brightness(${brightness.toFixed(2)}) contrast(${contrast.toFixed(2)}) ` +
      `sepia(${sepia.toFixed(2)}) hue-rotate(${hue.toFixed(0)}deg) ${warmth}`;

    // wide aperture -> shallow depth of field (subtle blur hint)
    const fStop = APERTURE[aper];
    const blurPx = fStop <= 2 ? (2 - fStop + 0.6) * 1.2 : 0;

    return { filter: f, blur: blurPx, grain: Math.min(0.4, noise * 0.09) };
  }, [iso, shutter, aper, wb]);

  function reset() {
    setIso(DEFAULTS.iso);
    setShutter(DEFAULTS.shutter);
    setAper(DEFAULTS.aper);
    setWb(DEFAULTS.wb);
  }

  return (
    <section id="simulator" className="panel">
      <h2 className="section-title">จำลองการตั้งค่ากล้อง</h2>
      <p className="section-sub">ปรับค่าแล้วดูภาพ preview เปลี่ยนตามจริง</p>

      <div className="sim-grid">
        <div className="sim-preview">
          <img src={PREVIEW_IMG} alt="ตัวอย่างภาพ" style={{ filter }} />
          {blur > 0 ? (
            <img
              src={PREVIEW_IMG}
              alt=""
              aria-hidden
              style={{ filter: `${filter} blur(${blur}px)`, clipPath: "inset(0 0 55% 0)" }}
            />
          ) : null}
          {grain > 0 ? (
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: grain,
                mixBlendMode: "overlay",
                backgroundImage:
                  "repeating-radial-gradient(circle at 30% 40%, #fff 0 1px, transparent 1px 2px), repeating-radial-gradient(circle at 70% 60%, #000 0 1px, transparent 1px 2px)",
                backgroundSize: "3px 3px, 4px 4px",
                pointerEvents: "none",
              }}
            />
          ) : null}
          <div className="sim-readout">
            <span className="sim-chip">ISO {ISO_VALUES[iso]}</span>
            <span className="sim-chip">{SHUTTER[shutter]}</span>
            <span className="sim-chip">f/{APERTURE[aper]}</span>
            <span className="sim-chip">{wb}K</span>
          </div>
        </div>

        <div className="sim-controls">
          <div className="slider-row">
            <label>
              ISO <b>{ISO_VALUES[iso]}</b>
            </label>
            <input
              type="range"
              min={0}
              max={ISO_VALUES.length - 1}
              value={iso}
              onChange={(e) => setIso(+e.target.value)}
            />
          </div>
          <div className="slider-row">
            <label>
              Shutter Speed <b>{SHUTTER[shutter]}</b>
            </label>
            <input
              type="range"
              min={0}
              max={SHUTTER.length - 1}
              value={shutter}
              onChange={(e) => setShutter(+e.target.value)}
            />
          </div>
          <div className="slider-row">
            <label>
              Aperture <b>f/{APERTURE[aper]}</b>
            </label>
            <input
              type="range"
              min={0}
              max={APERTURE.length - 1}
              value={aper}
              onChange={(e) => setAper(+e.target.value)}
            />
          </div>
          <div className="slider-row">
            <label>
              White Balance <b>{wb}K</b>
            </label>
            <input
              type="range"
              min={2500}
              max={9000}
              step={250}
              value={wb}
              onChange={(e) => setWb(+e.target.value)}
            />
          </div>
          <button className="btn btn-ghost sim-reset" onClick={reset}>
            รีเซ็ตค่า
          </button>
        </div>
      </div>
    </section>
  );
}
