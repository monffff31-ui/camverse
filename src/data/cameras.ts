export type Brand =
  | "Sony"
  | "Fujifilm"
  | "Canon"
  | "Nikon"
  | "Panasonic"
  | "Olympus";

export type UseCase = "photo" | "video" | "hybrid";
export type Level = "beginner" | "enthusiast" | "pro";

export interface Camera {
  id: string;
  name: string;
  brand: Brand;
  price: number; // THB
  sensor: string;
  megapixels: string;
  video: string;
  rating: number;
  ratingCount: number;
  tone: string; // short tone description (TH)
  bestFor: string; // who it's for (TH)
  tags: string[];
  useCases: UseCase[];
  level: Level;
  // simulated "look" via CSS filter applied to preview images
  lookFilter: string;
  specs: {
    processor: string;
    af: string;
    stabilization: string;
    weight: string;
  };
}

export const cameras: Camera[] = [
  {
    id: "sony-a6700",
    name: "Sony A6700",
    brand: "Sony",
    price: 46990,
    sensor: "APS-C",
    megapixels: "26MP",
    video: "4K 120p",
    rating: 4.8,
    ratingCount: 128,
    tone: "โทนคม คอนทราสต์สูง เหมาะสายวิดีโอและออโต้โฟกัสไว",
    bestFor: "Content Creator / สาย Vlog",
    tags: ["ถ่ายวิดีโอ", "ออโต้โฟกัสไว", "พกพาง่าย"],
    useCases: ["video", "hybrid"],
    level: "enthusiast",
    lookFilter: "contrast(1.12) saturate(1.08) brightness(1.02)",
    specs: {
      processor: "BIONZ XR",
      af: "Real-time AF",
      stabilization: "5-axis IBIS",
      weight: "493 g.",
    },
  },
  {
    id: "fujifilm-xs20",
    name: "Fujifilm X-S20",
    brand: "Fujifilm",
    price: 39990,
    sensor: "APS-C",
    megapixels: "26.1MP",
    video: "6.2K Video",
    rating: 4.7,
    ratingCount: 96,
    tone: "ฟิล์มลุค สีฟิล์มสวย เหมาะกับงานโทนอบอุ่น",
    bestFor: "สายฟิล์มลุค / ถ่ายชีวิตประจำวัน",
    tags: ["ฟิล์มลุค", "สีสวย", "เลนส์เยอะ"],
    useCases: ["photo", "hybrid"],
    level: "enthusiast",
    lookFilter: "sepia(0.18) saturate(1.15) contrast(1.05) hue-rotate(-6deg)",
    specs: {
      processor: "X-Processor 5",
      af: "AI AF",
      stabilization: "5-axis IBIS",
      weight: "491 g.",
    },
  },
  {
    id: "canon-r50",
    name: "Canon R50",
    brand: "Canon",
    price: 22990,
    sensor: "APS-C",
    megapixels: "24.2MP",
    video: "4K 30p",
    rating: 4.6,
    ratingCount: 81,
    tone: "ผิวละมุน สีโทนอุ่น เหมาะมือใหม่และสาย Vlog",
    bestFor: "มือใหม่ / งบประหยัด",
    tags: ["ใช้งานง่าย", "ผิวสวย", "น้ำหนักเบา"],
    useCases: ["photo", "video", "hybrid"],
    level: "beginner",
    lookFilter: "saturate(1.05) brightness(1.05) contrast(0.98) sepia(0.06)",
    specs: {
      processor: "DIGIC X",
      af: "Dual Pixel AF",
      stabilization: "Digital IS",
      weight: "375 g.",
    },
  },
  {
    id: "sony-a7c2",
    name: "Sony A7C II",
    brand: "Sony",
    price: 69990,
    sensor: "Full Frame",
    megapixels: "33MP",
    video: "4K 60p",
    rating: 4.8,
    ratingCount: 64,
    tone: "ฟูลเฟรมตัวเล็ก ไฟล์ละเอียด ไดนามิกเรนจ์กว้าง",
    bestFor: "ช่างภาพเริ่มต้นสู่โปร",
    tags: ["ฟูลเฟรม", "ไฟล์ละเอียด", "พกพาง่าย"],
    useCases: ["photo", "hybrid"],
    level: "pro",
    lookFilter: "contrast(1.1) saturate(1.05)",
    specs: {
      processor: "BIONZ XR",
      af: "Real-time AF",
      stabilization: "7-stop IBIS",
      weight: "514 g.",
    },
  },
  {
    id: "nikon-z6ii",
    name: "Nikon Z6 II",
    brand: "Nikon",
    price: 59990,
    sensor: "Full Frame",
    megapixels: "24.5MP",
    video: "4K 60p",
    rating: 4.7,
    ratingCount: 73,
    tone: "ความคมชัดสูง สีธรรมชาติ เหมาะงานแลนด์สเคป",
    bestFor: "สายแลนด์สเคป / งานสตูดิโอ",
    tags: ["คมชัด", "สีธรรมชาติ", "ทนทาน"],
    useCases: ["photo", "hybrid"],
    level: "pro",
    lookFilter: "contrast(1.06) saturate(0.98) brightness(1.0)",
    specs: {
      processor: "Dual EXPEED 6",
      af: "Hybrid AF",
      stabilization: "5-axis IBIS",
      weight: "705 g.",
    },
  },
  {
    id: "panasonic-s5ii",
    name: "Panasonic S5 II",
    brand: "Panasonic",
    price: 61990,
    sensor: "Full Frame",
    megapixels: "24.2MP",
    video: "4K 30p",
    rating: 4.6,
    ratingCount: 58,
    tone: "สายวิดีโอตัวจริง สีโทนภาพยนตร์ V-Log ในตัว",
    bestFor: "สายวิดีโอ / Cinematic",
    tags: ["วิดีโอโปร", "V-Log", "สีหนัง"],
    useCases: ["video", "hybrid"],
    level: "pro",
    lookFilter: "contrast(1.04) saturate(0.92) brightness(0.99) hue-rotate(4deg)",
    specs: {
      processor: "Venus Engine",
      af: "Phase Hybrid AF",
      stabilization: "Dual I.S. 2",
      weight: "740 g.",
    },
  },
];

export const brands: Brand[] = [
  "Sony",
  "Fujifilm",
  "Canon",
  "Nikon",
  "Panasonic",
  "Olympus",
];

export interface PriceRange {
  label: string;
  min: number;
  max: number;
}

export const priceRanges: PriceRange[] = [
  { label: "0 - 20,000", min: 0, max: 20000 },
  { label: "20,000 - 50,000", min: 20000, max: 50000 },
  { label: "50,000 ขึ้นไป", min: 50000, max: Infinity },
];
