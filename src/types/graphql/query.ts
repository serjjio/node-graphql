export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };

export type QueryVariables = Exact<{
    [key: string]: any
}>;