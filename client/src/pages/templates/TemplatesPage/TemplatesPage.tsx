import { routes } from "@/shared/constants";
import { Button, NumericInput } from "@/shared/ui";
import { TemplatesTable } from "@/widgets/templates";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useTemplates } from "./useTemplates";
import {
    maxTemplatesLimit,
    minTemplatesLimit,
    pageRangeDisplayed,
    paginationBreakLabel,
    paginationNextLabel,
    paginationPreviousLabel,
    templatesLimitStep,
} from "./constants";

export function TemplatesPage() {
    const { templates, pagesCount, handlePageChange, limit, handleLimitChange } = useTemplates();

    return (
        <>
            <div className="px-6 py-4 rounded-xl shadow-md mb-8 flex flex-row justify-between items-center">
                <Link to={routes.CreateTemplate} target="_blank">
                    <Button size="md" content="New" />
                </Link>

                <NumericInput
                    label="Per page:"
                    min={minTemplatesLimit}
                    max={maxTemplatesLimit}
                    step={templatesLimitStep}
                    value={limit}
                    onChange={handleLimitChange}
                />
            </div>

            <div className="mb-6">{templates && <TemplatesTable templates={templates} />}</div>

            {pagesCount && (
                <ReactPaginate
                    pageCount={pagesCount}
                    onPageChange={handlePageChange}
                    pageRangeDisplayed={pageRangeDisplayed}
                    breakLabel={paginationBreakLabel}
                    previousLabel={paginationPreviousLabel}
                    nextLabel={paginationNextLabel}
                    className="flex flex-row justify-center items-center gap-3"
                    pageClassName="px-[5px]"
                    activeClassName="border-[1px] border-gray rounded-full"
                />
            )}
        </>
    );
}
