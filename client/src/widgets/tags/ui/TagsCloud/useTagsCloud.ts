import { tagsApi, TTag } from "@/entities/tags";
import { mergeTags, parseTags } from "./helpers";

export function useTagsCloud(selectedTags: TTag[]) {
    const { data: fetchedTags } = tagsApi.useFindAllQuery();

    const mergedTags = fetchedTags ? mergeTags(selectedTags, fetchedTags) : [];

    return parseTags(mergedTags);
}
