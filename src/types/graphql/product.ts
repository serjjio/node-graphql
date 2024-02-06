import {QueryVariables} from "./query.js";

export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
import {ProductInterface} from "../product.js";

export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    JSON: any;
};

export type ProductInputData = {
    limit: Scalars['Int'];
};

export type QueryProductsArgs = {
    inputData: ProductInputData;
};

export type MagentoProductInterface = {
    name: Scalars['String'];
    sku: Scalars['String'];
}

export interface ResolvedProducts {
    items: Array<ProductInterface>
    totalProducts: Scalars['Int'];
    pageSize: Scalars['Int'];
}

export type ProductFilter = Exact<{
    [key: string]: any
}>;

export type ProductsQueryVariables = QueryVariables & Exact<{
    pageSize?: Scalars['Int'] | null;
    filter: ProductFilter;
}>;