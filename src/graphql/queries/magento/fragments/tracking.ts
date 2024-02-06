const gql = String.raw;

export const TRACKING_FRAGMENT = gql`
    fragment TrackingFragment on Tracks {
        track_number
        carrier_code
    }
`