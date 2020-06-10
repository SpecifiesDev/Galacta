//lighting.js

/**
*
* lighting class - x = new lighting(name, type, power, colour, pos, direction, intesnity);
* @param {string} name = name of object
* @param {int} type = 1 - 9 The type of lighting we will be using
* @param {int} power = 1 - 99 The level at which the light emmits, 1 = min, 99 = max
* @param {hex} colour = a hex colour, example 0xFFFFFF
* @param {object} pos = pos.x = (x location), pos.y = (y location), pos.z = (z location)
* @param {int} direction = null if none, + for up, - for down
* @param {int} intensity = null if none, 99++ max, 0 none?
**/

class Lighting{

  //Constructor
  constructor(name, type, power, colour, x, y, z, direction, intensity){
    //Set classwide vars
    this.name = name;
    this.type = type;
    this.power = power;
    this.colour = colour;
    this.x = x;
    this.y = y;
    this.z = z;
    this.direction = direction;
    this.intensity = intensity;

    //Create object
    this.object = this.CreateObject();
  }


  CreateObject(){
    //Create the 3js light object based off of Type Param
    switch(this.type){
      //Figure out what light to create based off of type param
      /**
      * 0 = Sun
      * 1 = Light Buble
      * 2 = Ambiance
      **/
      case 0:
        //Sun
        this.sun = new THREE.DirectionalLight(this.colour, this.power);
        this.sun.name = this.name;
        this.sun.position.x = this.x;
        this.sun.position.y = this.y;
        this.sun.position.z = this.z;
        this.sun.castShadow = true;
        return this.sun;
      break;
      case 1:
        // LB
        this.lib = new THREE.PointLight(this.colour, this.power, this.direction, this.intensity);
        this.lib.name = this.name;
        this.lib.position.x = this.x;
        this.lib.position.y = this.y;
        this.lib.position.z = this.z;
        this.lib.castShadow = true;

        return this.lib;
      break;
      case 2:
        //Ambiance


      break;

    }
  }


}
