export default function( fn, timing ) {

    var timer;

    return function() {
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout( fn.bind( this, ...arguments ), timing || 200);
    };

}
