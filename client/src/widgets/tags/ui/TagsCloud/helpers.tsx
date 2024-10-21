import { Tag } from "react-tagcloud";
import { TTag } from "@/entities/tags";
import { defaultCount } from "./constants";
import { TMergedTag, TTagToRender } from "./types";

export const mergeTags = (selectedTags: TTag[], allTags: TTag[]) => {
    const resultTags = selectedTags.map((tag) => ({
        ...tag,
        isSelected: true,
    }));

    for (const tag of allTags) {
        if (!resultTags.find((resultTag) => resultTag.id === tag.id)) {
            resultTags.push({
                ...tag,
                isSelected: false,
            });
        }
    }

    return resultTags;
};

export const parseTags = (tags: TMergedTag[]) => {
    return tags.map((tag) => ({
        ...tag,
        key: tag.id,
        value: tag.title,
        count: defaultCount,
    }));
};

export const renderTag = (tag: Tag) => {
    const { isSelected } = tag as TTagToRender;

    return (
        <span
            key={tag.key}
            className={`inline-block rounded-md cursor-pointer px-3 py-[6px] ${
                isSelected ? "bg-green-primary" : "bg-green-secondary"
            }`}
        >
            {tag.value}
        </span>
    );
};
