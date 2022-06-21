import {
  format,
  getDate,
  getMonth,
  getYear,
  differenceInMinutes,
  differenceInHours,
} from "date-fns";
import { useEffect, useState } from "react";
import Button from "./UI/button/Button";
import DangerButton from "./UI/button/DangerButton";
import TimeGroup from "./UI/time/TimeGroup";
import TimeDiv from "./UI/time/TimeDiv";
import Card from "./UI/card/Card";
import ColonDiv from "./UI/time/ColonDiv";
import Title from "./UI/title/Title";
import DateDiv from "./UI/time/DateDiv";
import SubTitle from "./UI/title/SubTitle";
import AmPm from "./UI/time/AmPm";
import { startTime } from "../utils/timezoneUtils";
import { getTime } from "../utils/utils";
import ClockForm from "./forms/ClockForm";

const Clock = ({ times, updateWorldClock, deleteWorldClock }) => {
  const zone = startTime(times.timeZoneName);
  const [worldTime, setWorldTime] = useState(zone);
  const [editSate, setEditState] = useState(null);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setWorldTime(startTime(times.timeZoneName));
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  const { year, month, day, date, hours, Hours, minuts, seconds, amPM } =
    getTime(worldTime);
  const {
    year: myYear,
    month: myMonth,
    day: myDay,
    Hours: myHours,
    minuts: myMinuts,
  } = getTime(new Date());
  let country = times.timeZoneName.split("/");

  const leftTime = new Date(myYear, myMonth, myDay, myHours, myMinuts);
  const rightTime = new Date(year, month, day, Hours, minuts);

  const hoursDifferent = differenceInHours(leftTime, rightTime);
  const minitesDifferent1 = differenceInMinutes(leftTime, rightTime);
  const handleUpdate = (e) => {
    updateWorldClock(times._id);
  };
  const deleteHandle = () => {
    deleteWorldClock(times._id);
  };
  return (
    <Card>
      <TimeGroup>
        <TimeDiv>{hours}</TimeDiv>
        <ColonDiv>:</ColonDiv>
        <TimeDiv>{minuts}</TimeDiv>
        <ColonDiv>:</ColonDiv>
        <TimeDiv>{seconds}</TimeDiv>
        <AmPm>{amPM}</AmPm>
      </TimeGroup>
      <DateDiv>{date}</DateDiv>
      <Title>{times.title}</Title>
      <SubTitle>{times.name}</SubTitle>
      <SubTitle>hours: {hoursDifferent}</SubTitle>
      <SubTitle>minites: {minitesDifferent1}</SubTitle>
      <SubTitle>zone: {country[country.length - 1]}</SubTitle>
      <Button onClick={handleUpdate}>Update</Button>
      <DangerButton onClick={deleteHandle}>Delete</DangerButton>
    </Card>
  );
};

export default Clock;
