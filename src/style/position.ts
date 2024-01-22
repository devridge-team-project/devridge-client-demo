export const fixed = {
  tl: (top: number | string, left: number | string) => `fixed top-${top} left-${left} z-50 `,
  br: (bottom: number | string, right: number | string) =>
    `fixed bottom-${bottom} right-${right} z-50 `,
};

export const absolute = {
  tl: (top?: number | string, left?: number | string) => {
    const topClass = () => {
      if (typeof top === "number" && top < 0) return `-top-${Math.abs(top)}`;
      return `top-${top}`;
    };
    const leftClass = () => {
      if (typeof left === "number" && left < 0) return `-left-${Math.abs(left)}`;
      return `left-${left}`;
    };
    return `absolute ${topClass()} ${leftClass()} `;
  },
  tr: (top?: number | string, right?: number | string) => {
    const topClass = () => {
      if (typeof top === "number" && top < 0) return `-top-${Math.abs(top)} `;
      return `top-${top}`;
    };
    const rightClass = () => {
      if (typeof right === "number" && right < 0) return `-right-${Math.abs(right)} `;
      return `right-${right}`;
    };
    return `absolute ${topClass()} ${rightClass()} `;
  },
  br: (bottom = 0, right = 0) => `absolute bottom-${bottom} right-${right} `,
  bl: (bottom = 0, left = 0) => `absolute bottom-${bottom} left-${left} `,
  full: {
    tl: (top?: number | string, left?: number | string) => {
      if (!(typeof top === "number") || !(typeof left === "number"))
        return `absolute top-${top} left-${left} w-full `;
      const topClass = top >= 0 ? `top-${top}` : `-top-${Math.abs(top)}`;
      const leftClass = left >= 0 ? `left-${left}` : `-left-${Math.abs(left)}`;
      return `absolute w-full ${topClass} ${leftClass} `;
    },
    bl: (bottom?: number | string, left?: number | string) =>
      `absolute bottom-${bottom ?? 0} left-${left ?? 0} w-full `,
  },
};
