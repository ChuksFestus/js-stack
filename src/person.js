// @flow

export default class {
  name: string

  constructor(name: string) {
    this.name = name;
  }

  intro() {
    return `hi am ${this.name} by name`;
  }
}
