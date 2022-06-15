import { useState, useEffect, useRef } from "react";
import Input from "../UI/input/Input";
import Select from "../UI/input/Select";
import PrimaryButton from "../UI/button/PrimaryButton";
import { objectDeepclone, isObjectEmpty } from "../../utils/utils";
import { timezoneLists } from "../../data/timezoneLists";

const timezoneForm = {
  title: {
    value: "",
    error: "",
    focus: false,
  },
  client: {
    value: "",
    error: "",
    focus: false,
  },
  timeZoneName: {
    value: "",
    error: "",
    focus: false,
  },
};

const ClockForm = ({ setTimezones }) => {
  // const startTime = new Date(Date.now()).toLocaleString("en-US", {
  //   timeZone: "America/New_York",
  //   timeZoneName: "short",
  // });
  // const [worldTime, setWorldTime] = useState(startTime);
  const [timezone, setTimezone] = useState({ ...timezoneForm });
  /*
  TODO: handleFocus, dhandleBlur
  */
  const { title, client, timeZoneName } = timezone;
  // handle Change
  const handleChange = (e) => {
    const { name: key, value } = e.target;
    const oldState = objectDeepclone(timezone);
    oldState[key].value = value;
    setTimezone(oldState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(timezone);
    const state = Object.keys(timezone).reduce((acc, cur) => {
      acc[cur] = timezone[cur].value;
      return acc;
    }, {});
    setTimezones((prevTimezones) => [...prevTimezones, state]);
    setTimezone({ ...timezoneForm });
  };

  // const [date, timeDig, timeOfDay] = worldTime.split(" ");
  // const [mm, dd, yyyy] = date.split("/");
  // const [hours, minutes, seconds] = timeDig.split(":");
  // const datetimes = `${yyyy}${mm},${dd},${hours},${minutes}`;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={title.value}
          name={"title"}
          placeholder={"Clock title"}
          onChange={handleChange}
        />
        <Input
          type="text"
          name={"client"}
          value={client.value}
          placeholder={"Client name"}
          onChange={handleChange}
        />
        <Select
          name={"timeZoneName"}
          value={timeZoneName.value}
          id="timeZoneName"
          onChange={handleChange}
        >
          {timezoneLists.map((timezone, index) => (
            <option key={index} value={timezone}>
              {timezone}
            </option>
          ))}
        </Select>
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </form>
    </div>
  );
};

export default ClockForm;
