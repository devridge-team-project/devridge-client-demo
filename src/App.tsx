import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/Routers";

export default function App() {
  return (
    <div className="font-pretendard-medium">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}
