import pluck from '../src/pluck';
import { assert } from 'chai';
import characters from './data/characters';



describe('Pluck Tests', ()=>{

    it('Plucks a single value', ()=>{


        assert.deepEqual(pluck.single(characters, 'name'), ["Micky", "Minnie", "Ernie", "Scooby"]);


    });


    it('Plucks multiple values', ()=>{

        assert.deepEqual(
            pluck.multi(characters, ['name', 'likes'] ),
            [
                {
                    name: "Micky",
                    likes: ['Minnie', 'Sailboats']
                },

                {
                    name: "Minnie",
                    likes: ['Mickey', 'Dresses']
                },

                {
                    name: "Ernie",
                    likes: ['Burt', 'Rubber Ducks']
                },

                {
                    name: "Scooby",
                    likes: ['Shaggy', 'Scooby Snacks', 'Food']
                }
            ]
        );


    });


});

