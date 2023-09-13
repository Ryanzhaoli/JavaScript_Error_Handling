// TODO: Enable strict mode
"use strict";
// TODO: Fix the following parameter list
function parseToJSON(data) {
  // TODO: Add a try/catch block to
  // attempt to convert 'data' to JSON

try {
  return JSON.parse(data);
} catch (err) {
  console.error(err);
  return null;
 }
}

let failData = "<h1>Hello World!</h1>"

let passData = JSON.stringify({ success: true });

console.log(parseToJSON(failData));

console.log(parseToJSON(passData));