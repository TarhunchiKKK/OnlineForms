import { TTag } from "@/entities/tags";
import { MenuItem } from "@mui/material";
import { HTMLAttributes } from "react";
import { Tag } from "react-tagcloud";
import { TTagToRender } from "./types";
import { defaultCount } from "./constants";

export const renderTag = (props: HTMLAttributes<HTMLLIElement>, tag: TTag) => {
    return (
        <MenuItem {...props} key={tag.id}>
            {tag.title}
        </MenuItem>
    );
};

export const getTagLabel = (tag: TTag) => {
    return tag.title;
};

export const separateTags = (selectedTags: TTag[], allTags: TTag[]) => {
    const resultTags: TTag[] = [];

    for (const tag of allTags) {
        if (!selectedTags.find((selectedTag) => selectedTag.id === tag.id)) {
            resultTags.push(tag);
        }
    }

    return resultTags;
};

export const parseTags = (tags: TTag[]) => {
    return tags.map((tag) => ({
        ...tag,
        key: tag.id,
        value: tag.title,
        count: defaultCount,
    }));
};

export const renderCloudTag = (tag: Tag) => {
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
