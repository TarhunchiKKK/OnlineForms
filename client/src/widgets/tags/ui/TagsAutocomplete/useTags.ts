import { tagsApi, TTag } from "@/entities/tags";
import { parseTags, separateTags } from "./helpers";

export function useTags(selectedTags: TTag[]) {
    const { data: fetchedTags } = tagsApi.useFindAllQuery();

    const cloudTags = parseTags(selectedTags);

    const dropdownTags = fetchedTags ? separateTags(selectedTags, fetchedTags) : [];

    return { dropdownTags, cloudTags };
}
