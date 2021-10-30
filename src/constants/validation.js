export const checkForRequiredField = (field, value, formLabels) => {
  let isInvalid = Array.isArray(value)
    ? !value.length
    : typeof value !== "string"
    ? !value.value
    : !value;
  let errorMsg = isInvalid ? `${formLabels[field]} is required` : "";
  if (field === "email" && !errorMsg) {
    errorMsg = "";
    isInvalid = true;
    // check reg
  }
  if (field === "password") {
    // check reg
  }
  return isInvalid ? errorMsg : "";
};

export const checkFormValid = (
  formValue,
  errorState,
  setErrorState,
  formLabels
) => {
  let isValid = true;
  const errorForm = { ...errorState };
  for (const [key, value] of Object.entries(errorForm)) {
    const isInvalid = Array.isArray(formValue[key])
      ? !formValue[key]?.length
      : typeof formValue[key] !== "string"
      ? !formValue[key].value
      : !formValue[key];
    if (isInvalid && formLabels[key]) {
      errorForm[key] =
        errorForm[key] || checkForRequiredField(key, value, formLabels);
      isValid = false;
    }
  }
  setErrorState((prev) => ({
    ...prev,
    ...errorForm,
  }));
  return isValid;
};
