const Park = function (name, ticketPrice, dinosaurCollection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function() {
  this.dinosaurCollection.splice(0,1)
}

Park.prototype.mostPopular
  let dinos = park.dinosaurCollection
  dinos.sort(a,b){
    return a.guestsAttractedPerDay b.guestsAttractedPerDay
  }
  return dinos[0];
module.exports = Park;
