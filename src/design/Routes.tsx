import { Route as RouteType } from "interface/Route";
import { Route } from "react-router-dom";

export default function Routes(root: RouteType, routes: RouteType[], layout?: React.ReactNode) {
  const [rootPath, rootElement] = root;
  return (
    <Route path={rootPath} element={layout}>
      <Route index element={rootElement} />
      {routes.map(([path, element]) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Route>
  );
}
