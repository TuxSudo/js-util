function throttle( fn, timing ) {

    var timer;

    return function(...args) {
        if(!timer) {
            timer = setTimeout( e => { fn.apply( this, ...args ); timer=false }, timing || 200);
        }
    };

}


export default throttle;


// var i = 0, increment = function() { console.log(++i); }, t = throttle(increment, 1000); window.addEventListener('resize', t );