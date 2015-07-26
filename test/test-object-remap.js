import remap from '../src/object-remap';
import { assert } from 'chai';
import characters from './data/characters';



describe('Object Remap Tests', ()=> {

    it('Remaps shallowly', ()=>{

        var Mickey = characters[0];
        assert.deepEqual(
            remap(Mickey, {cn: 'name', interests: 'likes'}),
            {
                cn: "Micky",
                interests: ['Minnie', 'Sailboats']
            }
        );

    });

    it('Obtains deeper values with dot.notation access', ()=>{

        var Mickey = characters[0];

        assert.deepEqual(
            remap(Mickey, {cn: 'name', shirt: 'details.shirt'}),
            {
                cn: "Micky",
                shirt: false
            }
        );
                                                  //naughty fat finger
        assert.deepEqual( remap(Mickey, { shirt: 'details.shit' }), { shirt: undefined} );

        assert.deepEqual( remap(Mickey, { shirt: 'details.shirt.not.really.here' }), { shirt: undefined} );


    });

});

