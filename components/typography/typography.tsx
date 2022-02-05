import { ReactNode } from "react";

interface typographyProps{
    size ? : 'big' | 'normal' | 'little'
    children : ReactNode
}

export const Typography = ({size, children}:typographyProps) => {
  return <div className="color-yellow">{children}</div>;
};
