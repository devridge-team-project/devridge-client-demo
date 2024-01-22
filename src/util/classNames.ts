function classNames(...props: string[]) {
  const array = props.map((prop) => prop.split(" "));
  return array.flat().join(" ");
}

export { classNames as cn };
