export default class FunctionSchema {
  validators = [(validator) => typeof validator === 'function'];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

/*
  expect(argu) {
    const validator = (value) => {
      if (value.length === num) {
        return true;
        // eslint-disable-next-line
      } else {
        return false;
      }
    };
    this.validators.push(validator);
    return this;
  }
  */
}
