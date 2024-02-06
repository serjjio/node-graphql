import { TrackingInterface } from "../types/index.js";

export default class Tracking implements TrackingInterface{
    trackNumber: string;
    carrierCode: string;

    constructor(trackNumber: string, carrierCode: string) {
        this.trackNumber = trackNumber;
        this.carrierCode = carrierCode
    }
}