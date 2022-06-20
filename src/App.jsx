import { useState } from "react";
import styled from "styled-components";
import Clock from "./components/Clock";
import BaseClock from "./components/BaseClock";
import Button from "./components/UI/button/Button";
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
  column-gap: 0.5rem;
  row-gap: 0.5rem;
  margin: 1rem 0rem;
`;

function App() {
  const [timezones, setTimezones] = useState([]);
  const [timeState, setTimeState] = useState(null);

  const updateWorldClock = (_id) => {
    const timeUpdate = timezones.find((zone) => zone._id === _id);
    setTimeState(timeUpdate);
  };

  const deleteWorldClock = (_id) => {
    setTimezones(timezones.filter((zone) => zone._id !== _id));
  };
  return (
    <Container>
      <HeadTitle>
        TrackZone Watch <Rotate>&lt; &#128525; &gt;</Rotate>
      </HeadTitle>
      <ClockForm setTimezones={setTimezones} timeState={timeState} />
      <TimeWrapper>
        <BaseClock updateWorldClock={updateWorldClock} />
        {timezones.map((times, index) => (
          <Clock
            times={times}
            key={index}
            deleteWorldClock={deleteWorldClock}
            updateWorldClock={updateWorldClock}
          />
        ))}
      </TimeWrapper>
    </Container>
  );
}

export default App;
