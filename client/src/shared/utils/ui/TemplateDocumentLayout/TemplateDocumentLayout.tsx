import { useEffect } from "react";
import { classes } from "./constants";
import { TTemplateDocumentLayoutProps } from "./types";

export function TemplateDocumentLayout({ children }: TTemplateDocumentLayoutProps) {
    useEffect(() => {
        classes.forEach((cl) => document.documentElement.classList.add(cl));

        return () => {
            classes.forEach((cl) => document.documentElement.classList.remove(cl));
        };
    });

    return <>{children}</>;
}
