export default class StringSchema {
  validators = [(validator) => typeof validator === 'string'];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  hasSpaces() {
    const validator = (value) => {
      if (value.includes(' ')) {
        return true;
        // eslint-disable-next-line
      } else {
        return false;
      }
    };
    this.validators.push(validator);
    return this;
  }
}
