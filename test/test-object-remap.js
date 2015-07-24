import remap from '../src/object-remap';
import { assert } from 'chai';
import characters from './data/characters';



describe('Remap Tests', ()=> {

    it('Remaps shallowly', ()=>{

        var Mickey = characters[0];
        assert.deepEqual(
            remap.shallow(Mickey, {cn: 'name', interests: 'likes'}),
            {
                cn: "Micky",
                interests: ['Minnie', 'Sailboats']
            }
        );

    });

});

