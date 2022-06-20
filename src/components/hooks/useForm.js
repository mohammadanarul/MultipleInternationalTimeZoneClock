import { useEffect, useState } from "react";
import { objectDeepclone, isObjectEmpty } from "../../utils/utils";
import shortid from "shortid";

const useForm = ({ timezoneInitForm, validate, setTimezones, timeState }) => {
  const [timezoneForm, setTimezoneForm] = useState(
    mapValuesToState(timezoneInitForm)
  );
  /**
   * TODO: handleFocus, handleBlur, handleUpdate,
   */
  // const {title, name, } timezoneForm
  const handleChange = (e) => {
    const { name: key, value } = e.target;
    const oldState = objectDeepclone(timezoneForm);
    oldState[key].value = value;
    oldState["_id"].value = shortid.generate();
    setTimezoneForm(oldState);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const state = mapStateToKeys(timezoneForm, "value");

    setTimezones((prevData) => [...prevData, state]);
    setTimezoneForm(mapValuesToState(timezoneInitForm, true));
  };
  useEffect(() => {
    if (timeState) {
      setTimezoneForm(mapValuesToState(timeState));
    }
  }, [timeState]);
  return {
    timezoneForm,
    handleChange,
    handleSubmit,
  };
};

export default useForm;

const mapValuesToState = (values, shouldClear = false) => {
  return Object.keys(values).reduce((acc, key) => {
    acc[key] = {
      value: shouldClear ? "" : values[key],
      error: "",
      focused: false,
      touched: false,
    };
    return acc;
  }, {});
};

const mapStateToKeys = (state, key) => {
  return Object.keys(state).reduce((acc, cur) => {
    acc[cur] = state[cur][key];
    return acc;
  }, {});
};
