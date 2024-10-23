import { TUser } from "@/entities/users";
import { HTMLAttributes } from "react";
import { MenuItem } from "@mui/material";
import { defaultTagCount } from "./constants";
import { Tag } from "react-tagcloud";
import { TUserToRender } from "./types";

export const renderUser = (props: HTMLAttributes<HTMLLIElement>, user: TUser) => {
    return (
        <MenuItem {...props} key={user.id}>
            {user.username ? `${user.username} - ${user.email}` : `${user.email}`}
        </MenuItem>
    );
};

export const getUserLabel = (user: TUser) => {
    return user.username ?? user.email;
};

export const parseUsersToTags = (users: TUser[]) => {
    return users.map((user) => ({
        ...user,
        key: user.id,
        value: user.username ?? user.email,
        count: defaultTagCount,
    }));
};

export const renderTagsCloudUser = (tag: Tag) => {
    const { isSelected } = tag as TUserToRender;

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
