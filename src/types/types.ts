export type Data<P> = {
    error: string,
    isError: boolean,
    isLoading: boolean,
    payload: P,
}

export type Article = {
    _id: string,
    body: string;
    details: string;
    gallery: Array<{ path: string }>;
    title: string;
};
