//a set up for random song selection
//everything subject to change

//class to queue random songs from the database
class RandomStack{
  constructor(){
    this.size = 0;
    this.ar = [];
  }
  //load a new song at random
  getNext(){
    //replace numSongs with the number of songs in our database
    var randNum = Math.floor(Math.random() * numSongs + 1);
    //replace dbRandNumRequest with a function that
    // obtains a song from the dabase using randNum
    this.ar.push(dbRandNumRequest);
    this.size++;
  }
  //pop the last song loaded and decrement size
  pop(){
    this.size--;
    return(this.ar.pop);
  }
}