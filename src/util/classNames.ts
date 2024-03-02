type ClassNames = string | { [key: string]: string | undefined | false };

function classNames(...props: ClassNames[]) {
  const classNames = props.reduce<string[]>((acc, cur) => {
    if (typeof cur === "string") {
      return [...acc, cur];
    }
    if (typeof cur === "object") {
      const values = Object.values(cur).map((value) => {
        if (!value) return "";
        return value;
      });
      return [...acc, ...values];
    }
    return acc;
  }, []);
  return classNames.join(" ");
}

export { classNames as cn };
