import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
  errorType?: string;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorType: undefined };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    const { name } = error;
    return { hasError: true, errorType: name };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (process.env.NODE_ENV === "development") console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    const {
      state: { hasError, errorType },
      props: { children, fallback },
    } = this;
    if (hasError) {
      if (errorType === "TypeError") return <div className="">타입 에러가 발생했습니다.</div>;
      return fallback || <div>에러가 발생했습니다.</div>;
    }
    return children;
  }
}

export default ErrorBoundary;
