export default function flatten( a=[] ) {

    return a.reduce(

        function(last, current) {
            return last.concat( Array.isArray( current ) ? flatten( current ) : current );
        },

        []

    );

}