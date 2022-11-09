import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useNavBar = () => {
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear("user");
    navigate("/login", {
      replace: true,
    });
  };

  const handleOptions = () => {
    setActive(!active);
  };

  return {
    active,
    handleLogout,
    handleOptions,
  };
};
