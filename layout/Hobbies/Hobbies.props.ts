import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface HobbiesProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children?: ReactNode;
}