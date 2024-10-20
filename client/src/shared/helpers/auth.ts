export function createAuthHeaders(authToken: string | null) {
    return {
        Authorization: `Bearer ${authToken ?? ""}`,
    };
}
