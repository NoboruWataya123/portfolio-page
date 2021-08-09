import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ExperienceProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}