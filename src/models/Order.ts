import { OrderInterface } from "../types/index.js";

export default class Order implements OrderInterface{
    orderId: number;
    orderIncrement: string;

    constructor(orderId: number, orderIncrement: string) {
        this.orderId = orderId;
        this.orderIncrement = orderIncrement
    }
}