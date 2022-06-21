import { format, isValid } from "date-fns";

export const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const objectDeepclone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const validate = (value) => {
  const errors = {};
  if (!value.title) {
    errors.title = "Title is required.";
  }
  if (!value.client) {
    errors.name = "Name is required.";
  }
  if (!value.timezoneName) {
    errors.title = "Time zone name is required.";
  }
  return errors;
};

export const getTime = (datetime) => {
  const timeParse = Date.parse(datetime);
  if (!isValid(timeParse)) {
    // return empty & log error for invalid dates
    console.error("invalid date:", datetime);
    return "";
  }
  const amPM = format(timeParse, "a");
  const Hours = parseInt(format(timeParse, "HH"));
  const hours = parseInt(format(timeParse, "hh"));
  const minuts = parseInt(format(timeParse, "mm"));
  const seconds = parseInt(format(timeParse, "ss"));
  const date = format(timeParse, "yyyy-MM-dd");
  const day = parseInt(format(timeParse, "dd"));
  const year = parseInt(format(timeParse, "yyyy"));
  const month = parseInt(format(timeParse, "MM"));
  return {
    amPM,
    hours,
    Hours,
    minuts,
    seconds,
    day,
    year,
    month,
    date,
  };
};
