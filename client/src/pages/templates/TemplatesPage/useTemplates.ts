import { ChangeEvent, useState } from "react";
import { templatesApi } from "@/entities/templates";
import { useDebounce } from "@/shared/hooks";
import { changeLimitDelay, defaultPage, defaultTemplatesLimit } from "./constants";

export function useTemplates() {
    const [page, setPage] = useState<number>(defaultPage);
    const [limit, setLimit] = useState<number>(defaultTemplatesLimit);
    const debouncedLimit = useDebounce(limit, changeLimitDelay);

    const { data: templates } = templatesApi.useFindAllQuery({ page, limit: debouncedLimit });
    const { data: templatesCount } = templatesApi.useGetCountQuery();

    const pagesCount = Math.ceil((templatesCount || 0) / limit);

    const handlePageChange = (e: { selected: number }) => {
        setPage(+e.selected);
    };

    const handleLimitChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLimit(+e.target.value);
    };

    return {
        templates,
        page,
        pagesCount,
        handlePageChange,
        limit,
        handleLimitChange,
    };
}
