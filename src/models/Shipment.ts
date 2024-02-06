import { ShipmentInterface, TrackingInterface } from "../types/index.js";

export default class Shipment implements ShipmentInterface{
    incrementId: string;
    tracks: [TrackingInterface];

    constructor(incrementId: string, tracks: [TrackingInterface]) {
        this.incrementId = incrementId;
        this.tracks = tracks
    }
}