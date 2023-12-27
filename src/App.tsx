import Routers from "./routes/Routers";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}
