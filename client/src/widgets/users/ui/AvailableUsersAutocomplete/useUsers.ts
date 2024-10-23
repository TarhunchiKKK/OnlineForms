import { TUser, usersApi } from "@/entities/users";
import { fetchUsersCount, searchDebounceDelay } from "./constants";
import { parseUsersToTags } from "./helpers";
import { useState } from "react";
import { useDebounced } from "@/shared/hooks";

export function useUsers(selectedUsers: TUser[]) {
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounced(search, searchDebounceDelay);

    const handleSearchChange = (value: string) => {
        setSearch(value);
    };

    const { data: fetchedUsers } = usersApi.useSearchQuery({
        search: debouncedSearch,
        count: fetchUsersCount,
        ids: selectedUsers.map((user) => user.id),
    });

    const cloudUsers = parseUsersToTags(selectedUsers);

    const dropdownUsers = fetchedUsers ?? [];

    return { dropdownUsers, cloudUsers, handleSearchChange };
}
