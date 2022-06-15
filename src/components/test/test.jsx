import { getDateTime } from "date-fns";

const Test = () => {
  // import Date-FNS for minutesDifference, https://date-fns.org/v1.29.0/docs/differenceInMinutes
  let dateReminder = getDateTime("2018, 3, 4, 15, 30, 0");
  const timefunc = (dateReminder) => {
    var minutesDifference = differenceInMinutes(
      new Date(dateReminder),
      new Date()
    );
  };

  return <div></div>;
};

export default Test;
