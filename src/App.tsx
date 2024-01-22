import { BrowserRouter } from "react-router-dom";
import Pages from "components/Pages";
import ErrorBoundary from "ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <div className="relative min-h-screen font-pretendard-medium">
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </div>
    </ErrorBoundary>
  );
}
