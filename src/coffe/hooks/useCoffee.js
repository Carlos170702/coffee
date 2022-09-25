import { useNavigate } from "react-router-dom";

export const useCoffee = () => {
  const navigate = useNavigate();

  const handleMenu = () => {
    navigate("/Menu", { replace: true});
  };

  return {
    handleMenu,
  };
};
