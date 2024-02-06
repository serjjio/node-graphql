import { QueryVariables } from "./query.js";
import { ProductInterface } from "../index.js";
import { Maybe, Exact, Scalars } from "./default.js"

export type ProductInputData = {
    limit: Scalars['Int'];
};

export type ProductsQueryArgs = {
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