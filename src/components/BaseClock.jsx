import { useState, useEffect } from "react";
import { format, formatDistance, subDays } from "date-fns";
import Button from "./UI/button/Button";
import TimeGroup from "./UI/time/TimeGroup";
import TimeDiv from "./UI/time/TimeDiv";
import AmPm from "./UI/time/AmPm";
import Card from "./UI/card/Card";
import ColonDiv from "./UI/time/ColonDiv";
import Title from "./UI/title/Title";
import DateDiv from "./UI/time/DateDiv";
import SubTitle from "./UI/title/SubTitle";
import axios from "axios";
import { startTime } from "../utils/timezoneUtils";

const initform = {
  id: "1234",
  title: "My Clock",
  name: "Md Anarul islam",
  time: new Date(),
  timeZoneName: "",
};

const Clock1 = ({ updateWorldClock }) => {
  const [baseClock, setBaseClock] = useState(initform);
  const timezone = baseClock.timeZoneName
    ? startTime(baseClock.timeZoneName)
    : new Date();
  const [clock, setClock] = useState(timezone);

  const hours = format(clock, "hh");
  const minuts = format(clock, "mm");
  const seconds = format(clock, "ss");
  const amPM = format(clock, "a");
  const date = format(clock, "yyyy-MMMM-dd");

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setClock(
        baseClock.timeZoneName ? startTime(baseClock.timeZoneName) : new Date()
      );
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);
  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    try {
      const response = await axios.get("http://ip-api.com/json");
      const country = response.data.country;
      console.log(country);
    } catch (error) {
      console.error(error);
    }
  };
  const updateHandle = () => {
    updateWorldClock(baseClock.id);
  };
  return (
    <>
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
        <Title>{baseClock.title}</Title>
        <Title>{baseClock.name}</Title>
        <SubTitle>country</SubTitle>
        <Button>Update</Button>
      </Card>
    </>
  );
};

export default Clock1;
