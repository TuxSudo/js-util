export default function flatten( a=[] ) {
	return a.reduce( (last, current) => last.concat( Array.isArray( current ) ? flatten( current ) : current ), [] );
}
