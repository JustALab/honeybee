import { SET_DELIVERY_DETAILS } from "../Actions";
import { STRINGS } from "../Config/Strings";

let deliveryDetails = {
  deliveryDate: "",
  deliveryTime: "ASAP",
  deliveryLocation: "",
  deliveryAddressType: "",
  deliveryAddress: STRINGS.chooseLocation,
  deliveryVendorId: 0
};

export default (state = deliveryDetails, action) => {
  switch (action.type) {
    case SET_DELIVERY_DETAILS:
      return action.deliveryDetails;
    default:
      return state;
  }
};