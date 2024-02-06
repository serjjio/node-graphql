export interface ShipmentInterface {
    incrementId: string,
    tracks: Array<TrackingInterface>
}

export interface TrackingInterface {
    trackNumber: string,
    carrierCode: string
}