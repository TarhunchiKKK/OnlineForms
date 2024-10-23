import { TagCloud } from "react-tagcloud";
import { TAvailableUsersAutocompleteProps } from "./types";
import { useUsers } from "./useUsers";
import { tagSize } from "./constants";
import { getUserLabel, renderTagsCloudUser, renderUser } from "./helpers";
import { TUser } from "@/entities/users";
import { AutocompletableInput } from "@/shared/ui";

export function AvailableUsersAutocomplete(props: TAvailableUsersAutocompleteProps) {
    const { dropdownUsers, cloudUsers, handleSearchChange } = useUsers(props.selectedUsers);

    const handleRemoveUserTag = (tag: unknown) => {
        props.handleAddUser(tag as TUser);
    };

    return (
        <>
            <div className="mb-6">
                <TagCloud
                    className="flex flex-row justify-start items-center flex-wrap gap-4"
                    tags={cloudUsers}
                    minSize={tagSize}
                    maxSize={tagSize}
                    shuffle={false}
                    renderer={renderTagsCloudUser}
                    onClick={handleRemoveUserTag}
                />
            </div>

            <div>
                <AutocompletableInput
                    options={dropdownUsers}
                    renderOption={renderUser}
                    onChange={props.handleAddUser}
                    getOptionLabel={getUserLabel}
                    onInputChange={handleSearchChange}
                />
            </div>
        </>
    );
}
