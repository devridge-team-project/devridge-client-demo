export const row = (gap?: number | "between") =>
  `${gap === "between" ? "justify-between" : `gap-${gap}`} ` + "flex flex-row  ";
export const col = (gap?: number) => `gap-${gap} flex flex-col `;

export const between = {
  row: "flex flex-row justify-between items-center ",
  col: "flex flex-col justify-between items-center ",
};

export const center = {
  col: (gap: number) => `gap-${gap} flex flex-col items-center `,
  row: "flex flex-row justify-center items-center ",
  colO: "flex flex-col justify-center items-center ",
  rowO: (gap: number) => `gap-${gap} flex flex-row justify-center items-center `,
};

export const grid = {
  col: (col: number) => `grid grid-cols-${col} `,
  row: (row: number) => `grid grid-rows-${row} grid-flow-col `,
};

export const box = {
  row: (height: number, gap?: number) => `h-${height} gap-${gap} flex flex-row `,
  col: (width: number, gap?: number) => `w-${width} gap-${gap} flex flex-col `,
};

export const responsiveColToRow = () => {
  const df = "flex flex-col";
  const md = "md:flex-row";
  return [df, md].join(" ");
};
export const responsiveRowToCol = () => {
  const df = "flex flex-row";
  const md = "md:flex-col";
  return [df, md].join(" ");
};

export const responsiveGridToCol = (gridCell: number) => {
  const df = `grid grid-cols-${gridCell}`;
  const md = "md:flex md:flex-col";
  return [df, md].join(" ");
};
