import { TagCloud } from "react-tagcloud";
import { tagSize } from "./constants";
import { useTagsCloud } from "./useTagsCloud";
import { renderTag } from "./helpers";
import { TTagsCloudProps } from "./types";

export function TagsCloud({ selectedTags, onSelect }: TTagsCloudProps) {
    const tags = useTagsCloud(selectedTags);

    console.log("Length: ", selectedTags.length);

    return (
        <TagCloud
            className="flex flex-row justify-start items-center flex-wrap gap-4"
            tags={tags}
            minSize={tagSize}
            maxSize={tagSize}
            shuffle={false}
            renderer={renderTag}
            onClick={onSelect}
        />
    );
}
