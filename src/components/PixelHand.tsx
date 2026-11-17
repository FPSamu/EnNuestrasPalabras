// Cursor de mano en pixel art. "#" = contorno, "." = relleno blanco.
const GRID = [
  "     ##          ",
  "    #..#         ",
  "    #..#         ",
  "    #..#         ",
  "    #..###       ",
  "    #..#..###    ",
  "    #..#..#..##  ",
  " ## #..#..#..#.# ",
  "#..##........#.# ",
  "#...#..........# ",
  " #.............# ",
  "  #............# ",
  "  #...........#  ",
  "   #..........#  ",
  "   #.........#   ",
  "    #........#   ",
  "    ##########   ",
];

export default function PixelHand({ className = "" }: { className?: string }) {
  const cells: { x: number; y: number; fill: string }[] = [];
  GRID.forEach((row, y) =>
    [...row].forEach((c, x) => {
      if (c === "#") cells.push({ x, y, fill: "#1a1a1a" });
      else if (c === ".") cells.push({ x, y, fill: "#ffffff" });
    }),
  );
  return (
    <svg
      viewBox={`0 0 ${GRID[0].length} ${GRID.length}`}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden
    >
      {cells.map(({ x, y, fill }) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={fill} />
      ))}
    </svg>
  );
}
