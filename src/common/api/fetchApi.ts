export const fetchApi = async <T>(url: string, options?: RequestInit): Promise<T> => {
    try {
        const response: Response = await fetch(url, options);
        return await response.json();
    } catch (error) {
        throw error instanceof Error ? new Error(error.message || 'Something went wrong') : error;
    }
};
