const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Jurassic Park', 10000, [])
    dinosaur1 = new Dinosaur ('t-Rex', 'carnivore', 1000)
    dinosaur2 = new Dinosaur ('Brontosaraus', 'carnivore', 100)
  });

  it('should have a name', function () {
      const actual = park.name;
      assert.strictEqual(actual, 'Jurassic Park')
    });


  it('should have a ticket price', function () {
      const actual = park.ticketPrice;
      assert.strictEqual(actual, 10000)
    });


  it('should have a collection of dinosaurs', function () {
      const actual = park.dinosaurCollection;
      assert.deepStrictEqual(actual, [])
      });


  it('should be able to add a dinosaur to its collection', function() {
      park.addDinosaur(dinosaur1);
      const actual = park.dinosaurCollection.length;
      assert.deepStrictEqual(actual, 1);
      });

  it('should be able to remove a dinosaur from its collection', function() {
      park.addDinosaur(dinosaur1);
      park.addDinosaur(dinosaur2);
      park.removeDinosaur();
      const actual = park.dinosaurCollection.length;
      assert.deepStrictEqual(actual, 1)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
       park.addDinosaur(dinosaur1);
       park.addDinosaur(dinosaur2);
       const actual = park.mostPopular();
       assert.deepStrictEqual(actual, 1000);
    });

//   it('should be able to find all dinosaurs of a particular species');
//
//   it('should be able to remove all dinosaurs of a particular species');
//
  });
