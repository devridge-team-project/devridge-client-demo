import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/Routers";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}
