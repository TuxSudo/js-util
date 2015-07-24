/* usage:

var obj = { name: "Jared", age: 100 };

remap(obj, { person: 'name', years: 'age' });

*/
export default function (obj, map) {
    var newObj = {};
    Object.keys(map).forEach(k=>newObj[k]=obj[map[k]]);
    return newObj;
}

