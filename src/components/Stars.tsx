type StarSpec = {
  top: string;
  left: string;
  size: number; // px en escritorio
  rotate: number;
  dark?: boolean;
  hideMobile?: boolean;
};

const STAR_PATH =
  "M50 4 L62 36 L96 38 L70 60 L79 94 L50 75 L21 94 L30 60 L4 38 L38 36 Z";

export function StarGradients() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <linearGradient id="star-pink" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f9cbe6" />
          <stop offset="45%" stopColor="#f0a9d4" />
          <stop offset="55%" stopColor="#f7c4e2" />
          <stop offset="100%" stopColor="#e597c6" />
        </linearGradient>
        <linearGradient id="star-dark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c99bb3" />
          <stop offset="50%" stopColor="#a87590" />
          <stop offset="100%" stopColor="#c493ad" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Star({ top, left, size, rotate, dark, hideMobile }: StarSpec) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`absolute ${hideMobile ? "hidden sm:block" : ""}`}
      style={{
        top,
        left,
        width: `clamp(${size * 0.5}px, ${size / 16}vw, ${size}px)`,
        transform: `rotate(${rotate}deg)`,
      }}
      aria-hidden
    >
      <path
        d={STAR_PATH}
        fill={`url(#${dark ? "star-dark" : "star-pink"})`}
        stroke={dark ? "#9c6a85" : "#e9a3cc"}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarCluster({ stars }: { stars: StarSpec[] }) {
  return (
    <>
      {stars.map((s, i) => (
        <Star key={i} {...s} />
      ))}
    </>
  );
}

export const topRightStars: StarSpec[] = [
  { top: "2%", left: "89%", size: 90, rotate: -12, dark: true },
  { top: "5%", left: "92.5%", size: 90, rotate: 8 },
  { top: "14%", left: "90%", size: 85, rotate: -20, hideMobile: true },
  { top: "20%", left: "91.5%", size: 85, rotate: 15, dark: true, hideMobile: true },
  { top: "22%", left: "95.5%", size: 85, rotate: -5, hideMobile: true },
  { top: "28%", left: "93.5%", size: 85, rotate: 22, hideMobile: true },
];

export const bottomLeftStars: StarSpec[] = [
  { top: "60%", left: "1.5%", size: 75, rotate: 10 },
  { top: "65%", left: "0%", size: 75, rotate: -15 },
  { top: "66%", left: "4%", size: 75, rotate: 20, dark: true },
  { top: "70%", left: "5.5%", size: 75, rotate: -8 },
  { top: "78%", left: "3.5%", size: 75, rotate: 12, hideMobile: true },
  { top: "79%", left: "6.5%", size: 75, rotate: -18, dark: true, hideMobile: true },
  { top: "79%", left: "13.5%", size: 75, rotate: 5, hideMobile: true },
  { top: "83%", left: "15.5%", size: 75, rotate: -12, hideMobile: true },
  { top: "88%", left: "11%", size: 75, rotate: 15, dark: true, hideMobile: true },
  { top: "90%", left: "1.5%", size: 75, rotate: -22, dark: true, hideMobile: true },
  { top: "93%", left: "7%", size: 75, rotate: 8, hideMobile: true },
];
