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
