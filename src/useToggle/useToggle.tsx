import { ReactNode, useState } from "react";

type toggleProps = {
  initialValue: boolean;
};
const useToggle = ({ initialValue }: toggleProps) => {
  const [toggle, SetToggle] = useState<ReactNode>(initialValue);
  console.log(toggle);
    const handleToggle = (toggle: boolean): void => {
    SetToggle((currentValue) =>
      typeof toggle === "boolean" ? toggle : !currentValue
    );
  };
  return [toggle, handleToggle];
};

export default useToggle;
