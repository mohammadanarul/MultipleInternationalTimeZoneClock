import { useState, useEffect } from "react";
import { format, formatDistance, subDays } from "date-fns";
import Button from "./UI/button/Button";
import TimeGroup from "./UI/time/TimeGroup";
import TimeDiv from "./UI/time/TimeDiv";
import Card from "./UI/card/Card";
import ColonDiv from "./UI/time/ColonDiv";
import Title from "./UI/title/Title";
import DateDiv from "./UI/time/DateDiv";
import SubTitle from "./UI/title/SubTitle";
const initform = {
  title: "",
  time: "",
  date: "",
};

const Clock1 = () => {
  const [baseClock, setBaseClock] = useState(new Date());

  const hours = format(baseClock, "hh");
  const minuts = format(baseClock, "mm");
  const seconds = format(baseClock, "ss");
  const amPM = format(baseClock, "a");
  const weekList = format(baseClock, "cccc");
  const date = format(baseClock, "yyyy-MMMM-dd");

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setBaseClock(new Date());
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <>
      <Card>
        <TimeGroup>
          <TimeDiv>{hours}</TimeDiv>
          <ColonDiv>:</ColonDiv>
          <TimeDiv>{minuts}</TimeDiv>
          <ColonDiv>:</ColonDiv>
          <TimeDiv>{seconds}</TimeDiv>
          <TimeDiv>{amPM}</TimeDiv>
        </TimeGroup>
        <DateDiv>{date}</DateDiv>
        <Title>My Clock</Title>
        <SubTitle>Dhaka</SubTitle>
        <Button>Update</Button>
      </Card>
    </>
  );
};

export default Clock1;
