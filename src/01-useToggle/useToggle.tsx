import { useState } from "react";

const useToggle = (initialValue: any) => {
  const [toggle, SetToggle] = useState(initialValue);
  const handleToggle = (tog: boolean) => {
    SetToggle(tog);
  };
  return [toggle, handleToggle];
};

export default useToggle;
