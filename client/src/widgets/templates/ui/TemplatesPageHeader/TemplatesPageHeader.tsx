import { Button, NumericInput } from "@/shared/ui";
import { maxTemplatesLimit, minTemplatesLimit, templatesLimitStep } from "./constants";
import { TTemplatesPageHeaderProps } from "./types";
import { useTemplatesPageHeader } from "./useTemplatesPageHeader.ts";

export function TemplatesPageHeader({ limit, handleLimitChange }: TTemplatesPageHeaderProps) {
    const { handleCreateTemplate, authToken, handleAuth } = useTemplatesPageHeader();

    return (
        <>
            <Button size="md" content="New" onClick={handleCreateTemplate} />

            <div className="flex flex-row justify-between items-center gap-3 max-w-40">
                <NumericInput
                    label="Per page:"
                    min={minTemplatesLimit}
                    max={maxTemplatesLimit}
                    step={templatesLimitStep}
                    value={limit}
                    onChange={handleLimitChange}
                />
            </div>

            <button onClick={handleAuth} className="text-xl text-green-primary">
                {authToken ? "Sign Out" : "Sign In"}
            </button>
        </>
    );
}
