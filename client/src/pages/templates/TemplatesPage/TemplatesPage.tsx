import { useTemplates } from "./useTemplates";
import { TemplatesPageHeader, TemplatesTable } from "@/widgets/templates";
import { TagsCloud } from "@/widgets/tags";
import { contentWrapperClassName } from "@/shared/constants";

export function TemplatesPage() {
    const { templates, tags, handleSelectTag } = useTemplates();

    return (
        <main className="py-4">
            <div className="container mx-auto">
                <div
                    className={`${contentWrapperClassName} mb-8 flex flex-row justify-between items-center`}
                >
                    <TemplatesPageHeader />
                </div>

                <div className="mb-6">
                    <TagsCloud selectedTags={tags} onSelect={handleSelectTag} />
                </div>

                <div className={`${contentWrapperClassName} mb-6`}>
                    {templates && <TemplatesTable templates={templates} />}
                </div>
            </div>
        </main>
    );
}
