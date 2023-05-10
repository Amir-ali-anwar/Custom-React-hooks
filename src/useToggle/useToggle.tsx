import { useState } from "react";

type toggleProps = {
  initialValue: boolean;
};
const useToggle = ({ initialValue }: toggleProps) => {
  const [toggle, SetToggle] = useState<boolean>(initialValue);
  const handleToggle = (toggle: boolean): void => {
    if(typeof toggle !== "boolean") throw Error("Please enter boolean value")
    SetToggle((currentValue) =>
      typeof toggle === "boolean" ? toggle : !currentValue
    );
  };
  return [toggle, handleToggle];
};

export default useToggle;
