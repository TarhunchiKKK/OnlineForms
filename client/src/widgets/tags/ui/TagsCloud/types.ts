import { TTag } from "@/entities/tags";
import { Tag, TagEventHandler } from "react-tagcloud";

export type TTagsCloudProps = {
    selectedTags: TTag[];

    onSelect: TagEventHandler;
};

export type TMergedTag = TTag & {
    isSelected: boolean;
};

export type TTagToRender = TMergedTag & Tag;
