export const validate = (name, value, form) => {
  const errors = [];

  if (form[name].validations.required) {
    if (!value) {
      errors.push(`${form[name].label} is require`);
    }
  }

  if (form[name].validations.minLength) {
    if (!value || value.length < form[name].validations.minLength) {
      errors.push(
        `${form[name].label} must be at least ${form[name].validations.minLength} characters`
      );
    }
  }

  if (form[name].validations.maxLength) {
    if (!value || value.length > form[name].validations.maxLength) {
      errors.push(
        `${form[name].label} must be maximum with ${form[name].validations.minLength} characters`
      );
    }
  }

  if (form[name].validations.pattern) {
    if (!value || !value.match(form[name].validations.pattern)) {
      errors.push(`${form[name].label} is invalid`);
    }
  }

  if (form[name].validations.selfsame) {
    if (value !== form[form[name].validations.selfsame].value) {
      errors.push(`${form[name].label} must be as ${form[name].validations.selfsame}`)
    }
  }

  return errors;
};
