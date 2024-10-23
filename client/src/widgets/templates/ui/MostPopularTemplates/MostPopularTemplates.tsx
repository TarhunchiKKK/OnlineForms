import { templatesApi } from "@/entities/templates";
import { templatesCount } from "./constants";
import { Gallery } from "@/shared/ui";
import { renderTemplate } from "./helpers";

export function MostPopularTemplates() {
    const { data: templates } = templatesApi.useFindMostPopularQuery(templatesCount);

    return <>{templates && <Gallery items={templates} renderItem={renderTemplate} />}</>;
}
