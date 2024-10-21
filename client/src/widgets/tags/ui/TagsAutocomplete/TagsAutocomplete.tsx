import { AutocompletableInput } from "@/shared/ui";
import { getTagLabel, renderCloudTag, renderTag } from "./helpers";
import { useTags } from "./useTags";
import { TTagsAutocompleteProps } from "./types";
import { TTag } from "@/entities/tags";
import { TagCloud } from "react-tagcloud";
import { tagSize } from "./constants";

export function TagsAutocomplete(props: TTagsAutocompleteProps) {
    const { dropdownTags, cloudTags } = useTags(props.selectedTags);

    const handleRemoveTag = (tag: unknown) => {
        props.handleAddTag(tag as TTag);
    };

    return (
        <>
            <div className="mb-6">
                <TagCloud
                    className="flex flex-row justify-start items-center flex-wrap gap-4"
                    tags={cloudTags}
                    minSize={tagSize}
                    maxSize={tagSize}
                    shuffle={false}
                    renderer={renderCloudTag}
                    onClick={handleRemoveTag}
                />
            </div>

            {!props.disabled && (
                <div>
                    <AutocompletableInput
                        options={dropdownTags}
                        renderOption={renderTag}
                        onChange={props.handleAddTag}
                        getOptionLabel={getTagLabel}
                        onSubmit={(title: string) => {
                            props.handleAddTag({
                                id: "",
                                title,
                            });
                        }}
                    />
                </div>
            )}
        </>
    );
}
