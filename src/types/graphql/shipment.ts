import { Maybe, Exact, Scalars } from "./default.js"
import { ShipmentInterface, OrderInterface } from "../index.js";
import {QueryVariables} from "./query.js";

export type ResolvedShipment = {
    order: OrderInterface,
    shipment: ShipmentInterface
}

export type CreateShipmentInputData = {
    orderId: Scalars['Int']
}

export type CreateShipmentQueryArgs = {
    inputData: CreateShipmentInputData;
};

export type CreateShipmentQueryVariables = QueryVariables & Exact<{
    input: {
        order_id: Scalars['Int'];
    }
}>;