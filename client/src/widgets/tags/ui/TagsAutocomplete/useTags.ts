import { tagsApi, TTag } from "@/entities/tags";
import { parseTags, separateTags } from "./helpers";

export function useTags(selectedTags: TTag[]) {
    const { data: fetchedTags } = tagsApi.useFindAllQuery();

    const dropdownTags = fetchedTags ? separateTags(selectedTags, fetchedTags) : [];

    const cloudTags = parseTags(selectedTags);

    return { dropdownTags, cloudTags };
}
