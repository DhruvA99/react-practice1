export const checkServiceablePincodesFunction = (pincode, array) => {
  if (!array) {
    return true;
  }
  if (pincode === "") {
    return true;
  }
  if (array && array.includes(pincode)) {
    return true;
  }
  return false;
};
