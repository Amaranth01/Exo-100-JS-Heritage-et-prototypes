const Vehicules = function (color, wheel, brand) {
    this.color = color;
    this.wheel = wheel;
    this.brand = brand;
    this.starter = function() {
        console.log("Bravo vous avez démarré la voiture");
    }
    this.stop = function() {
        console.log("Vous avez arrêté votre voiture");
    }
}

const Velo = function (color, wheel, brand,rayonRoues, typePeinture) {
    Vehicules.call(this, color, wheel, brand);
    this.rayonRoues = rayonRoues;
    this.typePeinture = typePeinture;
    this.monter = function (){
        console.log("Je suis monté sur mon vélo, je part");
    }
}

Velo.constructor = Velo;

const Voiture = function(color, wheel, brand, assurance, proprietaire) {
    Vehicules.call(this, 4, color, wheel, brand);
    this.assurance = assurance;
    this.proprietaire = proprietaire;
    this.CarWash = function () {
        console.log("J'ai lavé ma voiture")
    }
};

Voiture.constructor = Voiture;

let vehicle = new Vehicules("Rouge", 4, "Ford");
vehicle.starter();
vehicle.stop();

let velo = new Velo("Gris", 2, "Decathlon", 35, "metallique");
velo.monter();

let voiture = new Voiture("Rouge", 4, "Ford", "AXA", "moi");
voiture.CarWash();