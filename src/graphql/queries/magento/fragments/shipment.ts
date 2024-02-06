import {TRACKING_FRAGMENT} from "./tracking.js";

const gql = String.raw;

export const SHIPMENT_FRAGMENT = gql`
    ${TRACKING_FRAGMENT}
    
    fragment ShipmentFragment on Shipment {
        increment_id
        tracks {
            ...TrackingFragment
        }
    }
`