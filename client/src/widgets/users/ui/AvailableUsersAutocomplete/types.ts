import { TUser } from "@/entities/users";
import { Tag } from "react-tagcloud";

export type TAvailableUsersAutocompleteProps = {
    selectedUsers: TUser[];

    handleAddUser: (_: TUser | null) => void;
};

export type TMergedUser = TUser & {
    isSelected: boolean;
};

export type TUserToRender = TMergedUser & Tag;
