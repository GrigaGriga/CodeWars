class God {
  // @returns Human[]
  static create() {
    let Adam = new Man();
    let Eva = new Woman();
    return [Adam, Eva];
  }
}
class Human {}
class Man extends Human {}
class Woman extends Human {}

let humans = God.create();
