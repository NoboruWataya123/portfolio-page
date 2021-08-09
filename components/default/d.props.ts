import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface d extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    d?: string;
    children: ReactNode;
}