export function getCurrentDate() {
    const date = new Date();
    return `${date.getDay()} ${date.getMonth() + 1} ${date.getFullYear()}`;
}
