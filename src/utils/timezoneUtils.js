export const startTime = (timezoneName) => {
  try {
    return new Date(Date.now()).toLocaleString("en-US", {
      timeZone: timezoneName,
      timeZoneName: "short",
    });
  } catch (e) {
    console.log(e);
  }
};
