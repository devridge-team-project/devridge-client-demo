import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/Routers";

export default function App() {
  return (
    <div className="relative min-h-screen font-pretendard-medium">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}
