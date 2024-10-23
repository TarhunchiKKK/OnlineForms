export const parseArrayParam = (param: string, separator: string): string[] => {
    if (param.length === 0) {
        return [];
    }

    return param.split(separator);
};
