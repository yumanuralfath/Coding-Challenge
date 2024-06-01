export class Kata {
  static validatePin(pin: string): boolean {
    const regex = /^\d{4}$|^\d{6}$/;
    return pin.match(regex) !== null;
  }
}

console.log(Kata.validatePin("1234"));
console.log(Kata.validatePin("12345"));
console.log(Kata.validatePin("a234"));
