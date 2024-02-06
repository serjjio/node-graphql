import { ProductInterface } from "../types/index.js";

export default class Product implements ProductInterface{
    title: string;
    identifier: string;

    constructor(title: string, identifier: string) {
        this.title = title;
        this.identifier = identifier
    }

    getTitle() {
        return this.title;
    }

    getIdentifier() {
        return this.identifier;
    }
}