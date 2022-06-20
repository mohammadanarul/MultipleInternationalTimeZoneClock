import Input from "../UI/input/Input";
import Select from "../UI/input/Select";
import PrimaryButton from "../UI/button/PrimaryButton";
import { timezoneLists } from "../../data/timezoneLists";
import useForm from "../hooks/useForm";
import { validate } from "../../utils/utils";
const timezoneInitForm = {
  _id: "",
  title: "",
  name: "",
  timeZoneName: "",
};

const ClockForm = ({ setTimezones, timeState }) => {
  const { timezoneForm, handleChange, handleSubmit } = useForm({
    timezoneInitForm,
    validate,
    setTimezones,
    timeState,
  });
  const { title, name, timeZoneName } = timezoneForm;
  console.log(`update form data ${title} zone: ${timeZoneName}`);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={title.value}
          name={"title"}
          placeholder={"title"}
          onChange={handleChange}
        />
        <Input
          type="text"
          name={"name"}
          value={name.value}
          placeholder={"name"}
          onChange={handleChange}
        />
        <Select
          type="select"
          name={"timeZoneName"}
          value={timeZoneName.value}
          id="timeZoneName"
          onChange={handleChange}
        >
          <option value={"select timezone"}>select timezone</option>
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
