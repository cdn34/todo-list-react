'use strict';

import { normalize, schema } from 'normalizr';

const data = [ 
    { 
      _id: '1', 
      title: 'block1', 
      todos: [
        {
            _id: "11", 
            text: "Test1"
        }
      ] 
    },
    { 
      _id: '2', 
      title: 'block', 
      todos: [
        {
            _id: "22", 
            text: "Test2"
        }
      ] 
    } 
  ];

const todo = new schema.Entity('todos',{},{ idAttribute: '_id'});
export const list = new schema.Entity('lists', { todos: [ todo ]}, { idAttribute: '_id' });
// const normalizedData = normalize(data, [ list ]);
// console.log(normalizedData);
