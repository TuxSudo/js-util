/* usage:

var old = {
    name: "Jared",
    age: 100,
    details: {
        one: 1,
        two: 2
    }
};


var map = {
    person: 'name',
    years: 'age',
    one: 'details.one'
}

var new = remap(obj, map);


yields: {
    person: "Jared",
    years; "100"
    one: 1
}

*/

function dotAccess(obj, dotNotatedString) {
    var arr = dotNotatedString.split(".");
    while(arr.length && (obj = obj[arr.shift()]));
    
    // if there are still arr.length,
    // then couldn't access requested deeper items
    return arr.length ? undefined : obj;
}


function parseMapValue(object, mapValue) {
    if(typeof mapValue === "string" && mapValue.indexOf('.')>-1) {
        return dotAccess(object, mapValue);
    }

    else if(typeof mapValue === "string") {
        return object[ mapValue ];        
    }

    else if(typeof mapValue === "function") {
        return mapValue(object);
    }


}


export default function (obj, map) {
    var newObj = {};

    Object.keys(map).forEach( function(key) {
        newObj[key] = parseMapValue(obj, map[key]); 
    });

    return newObj;
}
