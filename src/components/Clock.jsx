import {
  format,
  formatDistance,
  getDate,
  getHours,
  getMinutes,
  getMonth,
  getSeconds,
  getTime,
  getYear,
  differenceInMinutes,
  differenceInHours,
} from "date-fns";
import { useEffect, useState } from "react";
import Button from "./UI/button/Button";
import DangerButton from "./UI/button/DangerButton";
const Clock = ({ times }) => {
  const ttz = new Date(Date.now()).toLocaleString("en-US", {
    timeZone: times.timeZoneName,
  });
  const [worldTime, setWorldTime] = useState(ttz);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setWorldTime(
        new Date(Date.now()).toLocaleString("en-US", {
          timeZone: times.timeZoneName,
        })
      );
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);
  const timeParse = Date.parse(worldTime);
  const time = format(timeParse, "hh:mm:ss a");
  const timeAP = format(timeParse, "a");
  const datetime = format(timeParse, "yyyy:MM:dd");
  const hours = getHours(timeParse);
  const minuts = getMinutes(timeParse);
  const seconds = getSeconds(timeParse);
  const day = getDate(timeParse);
  const year = getYear(timeParse);
  const month = getMonth(timeParse);
  const dateResult = `${year}, ${month}, ${day}, ${hours}, ${minuts}, 0`;
  const timeResult = `${hours}, ${minuts}, ${seconds}`;
  const hoursDifferent = differenceInHours(
    new Date(year, month, day, hours, minuts, 0),
    new Date()
  );
  const minitesDifferent1 = differenceInMinutes(
    new Date(2000, 0, 1, 10, 0, 0),
    new Date(2000, 0, 1, 10, 1, 59)
  );
  const handleUpdate = (e) => {
    const { name: key, value } = e.target;
    console.log(value);
  };
  const handleDelete = (e) => {
    const { name: key, value } = e.target;
    console.log(key);
  };
  return (
    <div>
      <div
        style={{ margin: "1rem", padding: ".5rem", border: "thin solid red" }}
      >
        <p>title: {times.title}</p>
        <p>client: {times.client}</p>
        <p>client: {times.timeZoneName}</p>
        <p>
          time: {time} {timeAP}
        </p>
        <p>time: {datetime}</p>
        <p>hours: {hoursDifferent}</p>
        <Button onClick={handleUpdate}>update</Button>
        <DangerButton onClick={handleDelete}>update</DangerButton>
      </div>
    </div>
  );
};

export default Clock;
