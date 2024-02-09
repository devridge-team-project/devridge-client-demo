import { useNavigate } from "react-router-dom";

export default function useNavigation() {
  const navigate = useNavigate();

  return (path: string, clear?: () => unknown | (() => Promise<unknown>)) => {
    clear?.();
    navigate(path);
  };
}
