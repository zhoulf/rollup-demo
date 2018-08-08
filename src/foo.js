// src/foo.js
export default 'hello world!';

export function toJson(data) {
	return Object.values(data);
}

export var word = 'hello world!';

function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// async function asyncPrint(value, ms) {
//   await timeout(ms);
//   console.log(value);
// }

// export function axio(value, ms) {
// 	asyncPrint(value, ms);
// }
