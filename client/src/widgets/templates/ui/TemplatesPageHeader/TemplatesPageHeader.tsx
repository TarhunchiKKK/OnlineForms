import { Button, NumericInput } from "@/shared/ui";
import { maxTemplatesLimit, minTemplatesLimit, templatesLimitStep } from "./constants";
import { TTemplatesPageHeaderProps } from "./types";
import { useTemplatesPageHeader } from "./useTemplatesPageHeader.ts";

export function TemplatesPageHeader({ limit, handleLimitChange }: TTemplatesPageHeaderProps) {
    const { handleCreateTemplate } = useTemplatesPageHeader();

    return (
        <>
            <Button size="md" content="New" onClick={handleCreateTemplate} />

            <NumericInput
                label="Per page:"
                min={minTemplatesLimit}
                max={maxTemplatesLimit}
                step={templatesLimitStep}
                value={limit}
                onChange={handleLimitChange}
            />
        </>
    );
}
