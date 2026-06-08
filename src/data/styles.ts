export interface StyleCategory {
  id: string;
  label: string; // EN
  labelTh: string; // TH
  image: string;
}

// Unsplash images (stable photo IDs) used to demo each shooting style.
export const styleCategories: StyleCategory[] = [
  {
    id: "portrait",
    label: "Portrait",
    labelTh: "พอร์ตเทรต",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "night",
    label: "Night",
    labelTh: "แสงน้อย",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "street",
    label: "Street",
    labelTh: "สตรีท",
    image:
      "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "cinematic",
    label: "Cinematic",
    labelTh: "วิดีโอ",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "landscape",
    label: "Landscape",
    labelTh: "วิวทิวทัศน์",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  },
];

export interface HeroCategory {
  id: string;
  label: string;
  labelTh: string;
  image: string;
}

export const heroCategories: HeroCategory[] = [
  {
    id: "portrait",
    label: "Portrait",
    labelTh: "พอร์ตเทรต",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "landscape",
    label: "Landscape",
    labelTh: "วิวทิวทัศน์",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "night",
    label: "Night",
    labelTh: "แสงน้อย",
    image:
      "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "street",
    label: "Street",
    labelTh: "สตรีท",
    image:
      "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "cinematic",
    label: "Cinematic",
    labelTh: "วิดีโอ",
    image:
      "https://images.unsplash.com/photo-1500210600161-3c2d83f2c14d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "vlog",
    label: "Vlog",
    labelTh: "สาย VLOG",
    image:
      "https://images.unsplash.com/photo-1601933470928-c4a6a5a36c83?auto=format&fit=crop&w=500&q=80",
  },
];

// brand -> css filter to fake the "look" of that camera's color science
export const brandLook: Record<string, string> = {
  Sony: "contrast(1.12) saturate(1.08) brightness(1.02)",
  Fujifilm: "sepia(0.2) saturate(1.18) contrast(1.05) hue-rotate(-8deg)",
  Canon: "saturate(1.06) brightness(1.06) contrast(0.97) sepia(0.07)",
  Nikon: "contrast(1.06) saturate(0.98)",
  Panasonic: "contrast(1.04) saturate(0.9) hue-rotate(5deg)",
  Olympus: "saturate(1.1) contrast(1.03) hue-rotate(-3deg)",
};
