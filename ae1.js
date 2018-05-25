function name(name){

    let self = {}; //creating an empty object to place functions
    process.stdout.write(name);

    function go(place) {
        process.stdout.write(" goes to " + place.toLowerCase());
        return self;
    }

    function buy(stuff) {
        process.stdout.write(" to buy " + stuff.toLowerCase());
        return self;
    }

    function learn(stuff) {
        process.stdout.write(" to learn " + stuff.toLowerCase());
        return self;
    }
    //placing all the existing functions to our object
    self.learn = learn;
    self.go = go;
    self.buy = buy;
    return self;
}

name("Edvardas").go("Exadel").learn("how to be awesome");
