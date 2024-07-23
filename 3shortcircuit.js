// short circuiting
// applied to logical operators (& | ^)
// agar logical operator mein tum non boolean doge toh JS will convert them to boolean itself (khud convert kardega)
// kaise:
// using toboolean() -> see table in ecmascript.org
// by this function comes the concept of truthy and falsy values
// falsy values: 0 or -0, '', null, undefined, NaN, false
// truthy values: not falsy values
// ex: 10 -> true
// ex: 0 -> false
// ex: "false" -> true
// ex: "" -> false
// ex: null -> false
// ex: undefined -> false
// ex: NaN -> false

// &&
// in && if the first operand is false then it doesnt check the 2nd operand it returns the first operand
// in && if the first operand is true then it returns the 2nd operand 
// usecase: used in react (frontend codebases)

// so when we do 10 && 30 -> 30
console.log(10 && 30);
// what this does is convert 10 into boolean that is true
// and if the first arg is true then it returns the 2nd argument
console.log(0 && 30);
console.log(40 && null);
console.log("" && 0);

// ||
// in || if the first operand is false then it returns the 2nd operand
// in || if the first operand is true then it doesnt check the 2nd operand it returns the first operand
console.log(10 || 30);
console.log(0 || 30);
console.log(40 || null);
console.log("" || -0);
