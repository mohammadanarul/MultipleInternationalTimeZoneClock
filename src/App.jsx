import { useState } from "react";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import styled, { keyframes } from "styled-components";
import Clock from "./components/Clock";
import BaseClock from "./components/BaseClock";
import Button from "./components/UI/button/Button";
import PrimaryButton from "./components/UI/button/PrimaryButton";
import SecondaryButton from "./components/UI/button/SecondaryButton";
import ClockForm from "./components/forms/ClockForm";
import Container from "./components/UI/Container";
import Title from "./components/UI/title/Title";
import HeadTitle from "./components/UI/title/HeadTitle";
import Rotate from "./components/UI/motion/Rotate";

const ButtonGroup = styled.div`
  display: flex;
  margin: 0px 1rem;
`;

const DengerButton = styled(Button)`
  background-color: Transparent;
  color: #0d9488;
`;

const TimeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  // grid-template-rows: 80px auto 80px;
  column-gap: 1rem;
  row-gap: 1rem;
`;

function App() {
  const [timezones, setTimezones] = useState([]);
  // const handleUpdate = (times) => {
  //   console.log(times);
  // };
  return (
    <Container>
      <HeadTitle>
        TrackZone Watch <Rotate>&lt; &#128525; &gt;</Rotate>
      </HeadTitle>
      <ClockForm setTimezones={setTimezones} />
      <TimeWrapper>
        <BaseClock />
        {timezones.map((times, index) => (
          <Clock times={times} key={index} />
        ))}
      </TimeWrapper>
      <ButtonGroup>
        <Button>Start Clock</Button>
        <SecondaryButton>Start Clock</SecondaryButton>
      </ButtonGroup>
    </Container>
  );
}

export default App;
