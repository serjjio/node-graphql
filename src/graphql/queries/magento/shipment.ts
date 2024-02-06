import { SHIPMENT_FRAGMENT } from './fragments/shipment.js'

const gql = String.raw;

export const CREATE_SHIPMENT_QUERY = gql`
    ${SHIPMENT_FRAGMENT}

    mutation CreateShipment($input: CreateShipmentInput!) {
        createShipment(
          input: $input
        ) {
          order {
            order_id
            order_increment_id
          }
          shipment {
            ...ShipmentFragment
          }
        }
  }
`;