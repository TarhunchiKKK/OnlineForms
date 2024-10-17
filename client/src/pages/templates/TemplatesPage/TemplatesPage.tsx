import ReactPaginate from "react-paginate";
import { TemplatesPageHeader, TemplatesTable } from "@/widgets/templates";
import { useTemplates } from "./useTemplates";
import {
    pageRangeDisplayed,
    paginationBreakLabel,
    paginationNextLabel,
    paginationPreviousLabel,
    wrapperClassName,
} from "./constants";

export function TemplatesPage() {
    const { templates, pagesCount, handlePageChange, limit, handleLimitChange } = useTemplates();

    return (
        <main className="py-4">
            <div className="container mx-auto">
                <div
                    className={`${wrapperClassName} mb-8 flex flex-row justify-between items-center`}
                >
                    <TemplatesPageHeader limit={limit} handleLimitChange={handleLimitChange} />
                </div>

                <div className={`${wrapperClassName} mb-6`}>
                    {templates && <TemplatesTable templates={templates} />}
                </div>

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
            </div>
        </main>
    );
}
