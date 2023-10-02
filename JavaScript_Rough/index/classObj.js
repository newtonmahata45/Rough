console.clear();
console.log("Starting...");
// console.log(globalThis);

class A {
  name = "Newton";
  a = () => {
    console.log(this.name);
    return "OM";
  };
}
let cha = new A();
// // cha()
console.log(cha.a());
