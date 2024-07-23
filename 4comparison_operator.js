//  comparison/relational operators always return boolean result.
// <, >, <=, >= -> EZ
// == abstract equality operator -> checks if a and b are equal or if we can convert a or b in some other type and make them equal.
console.log(10 == 10);
console.log(10 == "10"); // datatype alag hai but js number ko string mein convert kardeta hai
// === strict equality operator -> checks if a and b are equal or not (no type conversion here)
console.log(10 === 10);
console.log(10 === "10");
// != abstract not equality operator -> checks if a and b are not equal (conversions krke equal ho sakta hai)
console.log(10 != 10);
console.log(10 != "10");
// !== strict not equal -> checks if a and b are not equal (no type conversion)
console.log(10 !== 10);
console.log(10 !== "10");
