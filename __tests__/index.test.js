const { test, expect } = require('@jest/globals');
const Room = require('../src/modules/room');
const Roomba = require('../src/modules/roomba');

const defaultValues = [5, 5, 1, 2, [[ '1', '0' ], [ '2', '2' ], [ '2', '3']], 'NNESEESWNWW'];

test('Room saves width and length', () => {
  const room = new Room(...defaultValues);

  expect(room.width).toBe(5);
  expect(room.length).toBe(5);
})

test('Generates proper room size', () => {
  const room = new Room(...defaultValues);

  expect(room.room.length).toBe(5);
  expect(room.room[0].length).toBe(5);
})

test('Creates roomba instance with position, boundaries and driving instructions', () => {
  const room = new Room(...defaultValues);
  
  expect(room.roomba).toBeInstanceOf(Roomba);
  expect(room.roomba.getPosition()).toEqual([1, 2]);
})

test('Roomba saves driving instructions', () => {
  const room = new Room(...defaultValues);

  expect(room.roomba.getDrivingInstructions()).toBe('NNESEESWNWW');
})