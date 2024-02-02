export default class Product {
    title: string
    identifier: number
    constructor(title: string, identifier: number) {
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