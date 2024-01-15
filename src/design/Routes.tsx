import { Route } from "react-router-dom";

export default function Routes({ routes }: { routes: { path: string; element: JSX.Element }[] }) {
  return (
    <>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </>
  );
}
