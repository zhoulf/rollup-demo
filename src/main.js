// src/main.js
import { toJson, word } from './foo.js';
export default () => {
	let  data = { info : word };
  	return {
  		toJson() {
  			return toJson(data);
  		}
  };
}