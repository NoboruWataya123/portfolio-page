import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ProgressBarProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
    appearance: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
}