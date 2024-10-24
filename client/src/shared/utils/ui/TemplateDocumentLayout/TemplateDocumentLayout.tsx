import { useEffect } from "react";
import { classes } from "./constants";
import { TTemplateDocumentLayoutProps } from "./types";

export function TemplateDocumentLayout({ children }: TTemplateDocumentLayoutProps) {
    useEffect(() => {
        classes.forEach((cl) => document.body.classList.add(cl));

        return () => {
            classes.forEach((cl) => document.body.classList.remove(cl));
        };
    });

    return <>{children}</>;
}
