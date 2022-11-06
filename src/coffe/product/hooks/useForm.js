import { useState } from "react";

export const useForm = (values = {}) => {
  const [formState, setFormState] = useState(values);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    formState,
    onInputChange,
  };
};
