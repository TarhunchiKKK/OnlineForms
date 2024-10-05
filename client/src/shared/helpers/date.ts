export function formatDate(date: string) {
    const parsedDate = new Date(date);
    return parsedDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}
