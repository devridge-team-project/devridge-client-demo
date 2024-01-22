export const row = (gap = 8) => `flex flex-row gap-${gap} `;
export const col = (gap = 8, width?: number | string) =>
  `flex flex-col gap-${gap} ${width ? `w-${width}` : "w-full"} `;

export const between = {
  row: "flex flex-row justify-between items-center ",
  col: "flex flex-col justify-between items-center ",
};

export const center = {
  col: (gap = 0) => `gap-${gap} flex flex-col items-center `,
  row: (gap = 0) => `gap-${gap} flex flex-row items-center `,
  colO: (gap = 0) => `gap-${gap} flex flex-col justify-center items-center `,
  rowO: (gap = 0) => `gap-${gap} flex flex-row justify-center items-center `,
  screen: {
    default:
      "flex justify-center items-center min-h-screen w-full overflow-hidden min-h-screen relative ",
    col: (gap = 0) => `gap-${gap} flex flex-col justify-center items-center min-h-screen w-full `,
    row: (gap = 0) => `gap-${gap} flex flex-row justify-center items-center min-h-screen w-full `,
  },
};

export const grid = {
  col: (col: number, gap = 12) => `grid grid-cols-${col} gap-${gap} `,
  row: (row: number, gap = 12) => `grid grid-rows-${row}  gap-${gap}`,
};

export const box = {
  row: (height: number, gap?: number) => `h-${height} gap-${gap} flex flex-row `,
  col: (width: number, gap?: number) => `w-${width} gap-${gap} flex flex-col `,
};
