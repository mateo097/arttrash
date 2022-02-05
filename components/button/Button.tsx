import { ReactNode } from "react";
import './button.css'

interface buttonProps {
    children : ReactNode
    color? : "yellow"|"green"|"red"
    borderColor? : "yellow"|"green"|"red" 
    size? : "big" | "semiBig"
    href?: string
}

export const Button = ({children, color, borderColor, size, href }:buttonProps) => {
  return <a className={`p-1 pointer m-1 border-${borderColor} color-${color} size-${size} button `} href={href}> 
  {children}
</a>;
};
