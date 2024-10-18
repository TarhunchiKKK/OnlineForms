import { ChangeEvent } from "react";

export type TTemplatesPageHeaderProps = {
    limit: number;

    handleLimitChange: (_: ChangeEvent<HTMLInputElement>) => void;
};
