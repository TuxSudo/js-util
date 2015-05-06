import flatten from '../src/array-flatten';
import { assert } from 'chai';



describe('Array Flatten', () => {

    

    it('flattens multi-dimensional arrays', () => {
        var arr = [1, 2, 3, [4, 5, 6, [7, 8, 9] ] ];
        assert.equal( typeof flatten, "function" );
        assert.equal( flatten(arr).length, 9 );
        assert.deepEqual( flatten(arr), [1,2,3,4,5,6,7,8,9] );

    });


    it('returns single-dimensional arrays', () => {
        var flat = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        assert.equal( typeof flatten, "function" );
        assert.equal( flatten(flat).length, 9 );
        assert.deepEqual( flatten(flat), [1,2,3,4,5,6,7,8,9] );


    });



});
