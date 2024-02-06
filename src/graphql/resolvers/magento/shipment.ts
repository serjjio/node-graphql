import { GraphqlService } from "../../../services/graphql-service.js";
import { ResolvedShipment, CreateShipmentQueryArgs, CreateShipmentQueryVariables } from "../../../types/graphql/index.js";
import { CREATE_SHIPMENT_QUERY } from '../../queries/magento/shipment.js';
import { OrderInterface, ShipmentInterface } from "../../../types/index.js";
import Order from "../../../models/Order.js";
import Shipment from "../../../models/Shipment.js";
import Tracking from "../../../models/Tracking.js";

const graphqlService = new GraphqlService(process.env.MAGENTO_GRAPHQL_URL!);

export default {
    createShipment: async (args: CreateShipmentQueryArgs, context: any) => {
        const variables: CreateShipmentQueryVariables = {
            input: {
                order_id: args.inputData.orderId
            }
        }

        const result = await graphqlService.sendQuery({
            query: CREATE_SHIPMENT_QUERY,
            variables: variables
        });

        const ResolvedShipment: ResolvedShipment = {
            order: <OrderInterface>new Order(result.data.createShipment.order.order_id, result.data.createShipment.order.order_increment_id),
            shipment: <ShipmentInterface>new Shipment(
                result.data.createShipment.shipment.increment_id,
                result.data.createShipment.shipment.tracks.map(
                    (track: { track_number: string, carrier_code: string }) => new Tracking(track.track_number, track.carrier_code)
                )
            )
        };

        return ResolvedShipment
    }
}