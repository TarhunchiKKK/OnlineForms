import { TTag } from "@/entities/tags";
import { Tag } from "react-tagcloud";

export type TTagsAutocompleteProps = {
    selectedTags: TTag[];

    handleAddTag: (_: TTag | null) => void;

    disabled: boolean;
};

export type TMergedTag = TTag & {
    isSelected: boolean;
};

export type TTagToRender = TMergedTag & Tag;
