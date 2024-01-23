import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "ErrorBoundary";
import Routes from "./router/Routes";

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="relative min-h-screen font-pretendard-medium">
          <Routes />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
