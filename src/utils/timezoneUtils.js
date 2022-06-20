export const startTime = (zone) => {
  try {
    return new Date(Date.now()).toLocaleString("en-US", {
      timeZone: zone,
    });
  } catch (e) {
    console.log(e);
  }
};
