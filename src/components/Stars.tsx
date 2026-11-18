// Estrellas decorativas.
//
// Cada grupo (StarCluster) es una caja anclada a una esquina de su sección. Las
// estrellas se posicionan en % dentro de esa caja (x, y) y su tamaño es un % del
// ancho de la caja, así el grupo escala como una unidad y nunca se dispersa sobre
// el contenido, sin importar el alto de la sección.

type StarSpec = {
  x: number; // % desde la izquierda de la caja
  y: number; // % desde arriba de la caja
  size: number; // % del ancho de la caja
  rotate: number;
  dark?: boolean;
};

const STAR_PATH = "M50 4 L62 36 L96 38 L70 60 L79 94 L50 75 L21 94 L30 60 L4 38 L38 36 Z";

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

export function StarCluster({ stars, className }: { stars: StarSpec[]; className: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`}>
      {stars.map((s, i) => (
        <svg
          key={i}
          viewBox="0 0 100 100"
          className="absolute"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: `${s.size}%`, transform: `rotate(${s.rotate}deg)` }}
        >
          <path
            d={STAR_PATH}
            fill={`url(#${s.dark ? "star-dark" : "star-pink"})`}
            stroke={s.dark ? "#9c6a85" : "#e9a3cc"}
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

// Grupo pequeño de 3 estrellas para celulares (caja cuadrada).
export const miniStars: StarSpec[] = [
  { x: 0, y: 28, size: 50, rotate: -12 },
  { x: 42, y: 0, size: 50, rotate: 10, dark: true },
  { x: 38, y: 48, size: 50, rotate: 20 },
];

// Inicio, esquina superior derecha (caja 3:5)
export const heroTopRightStars: StarSpec[] = [
  { x: 0, y: 0, size: 48, rotate: -12, dark: true },
  { x: 40, y: 7, size: 48, rotate: 8 },
  { x: 12, y: 38, size: 46, rotate: -20 },
  { x: 25, y: 55, size: 46, rotate: 15, dark: true },
  { x: 55, y: 62, size: 46, rotate: -5 },
  { x: 35, y: 78, size: 46, rotate: 22 },
];

// Inicio, esquina inferior izquierda (caja 3:4)
export const heroBottomLeftStars: StarSpec[] = [
  { x: 7, y: 0, size: 24, rotate: 10 },
  { x: 0, y: 12, size: 24, rotate: -15 },
  { x: 19, y: 15, size: 24, rotate: 20, dark: true },
  { x: 27, y: 25, size: 24, rotate: -8 },
  { x: 17, y: 45, size: 24, rotate: 12 },
  { x: 32, y: 47, size: 24, rotate: -18, dark: true },
  { x: 66, y: 47, size: 24, rotate: 5 },
  { x: 75, y: 57, size: 24, rotate: -12 },
  { x: 54, y: 70, size: 24, rotate: 15, dark: true },
  { x: 7, y: 75, size: 24, rotate: -22, dark: true },
  { x: 34, y: 82, size: 24, rotate: 8 },
];

// Ejes temáticos, borde derecho (caja 2:5)
export const axesRightStars: StarSpec[] = [
  { x: 64, y: 0, size: 37, rotate: 10 },
  { x: 83, y: 8, size: 37, rotate: -12 },
  { x: 57, y: 17, size: 37, rotate: 18, dark: true },
  { x: 49, y: 28, size: 37, rotate: -6 },
  { x: 72, y: 45, size: 37, rotate: 14 },
  { x: 57, y: 53, size: 37, rotate: -20, dark: true },
  { x: 8, y: 67, size: 37, rotate: 8 },
  { x: 0, y: 78, size: 37, rotate: -15 },
  { x: 38, y: 84, size: 37, rotate: 20, dark: true },
  { x: 72, y: 87, size: 37, rotate: -4 },
];

// Manifiesto, borde izquierdo (caja 2:5)
export const manifestoLeftStars: StarSpec[] = [
  { x: 2, y: 6, size: 45, rotate: -10 },
  { x: 34, y: 0, size: 45, rotate: 12 },
  { x: 34, y: 29, size: 45, rotate: 20, dark: true },
  { x: 38, y: 48, size: 45, rotate: -6 },
  { x: 0, y: 67, size: 45, rotate: 14 },
  { x: 20, y: 82, size: 45, rotate: -18, dark: true },
];
