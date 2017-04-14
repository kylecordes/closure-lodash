// Import and use a function from lodash.

import { flatMap } from 'lodash-es';

const x = ['a', 'b', 'c'];
console.log(flatMap(x, item => [item, item]));
