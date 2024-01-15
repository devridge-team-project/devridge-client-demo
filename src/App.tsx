import { BrowserRouter } from "react-router-dom";
import Pages from "components/Pages";

export default function App() {
  return (
    <div className="relative min-h-screen font-pretendard-medium">
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
}
