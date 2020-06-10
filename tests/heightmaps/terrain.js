const init = () => {

    // generate the map
    let subx = 1000; // width of map
    let subz = 700; //height of map

    let seed = .4; // seed

    noise.seed(seed); // make use of perlin.js

    let data = new Float32Array(subx * subz * 3); // array containing 3 sets of cords

    // generate heightmap
    for(let l = 0; l < subz; l++) {
        for(let w = 0; w < subx; w++) {
            let x = (w - subx * .5) * 5;
            let z = (l- subz  * .5) * 2;
            let y = noise.simplex2(x, z);

            data[3 * (l * subx + w)] = x;
            data[3 * (l * subx + w) + 1] = y;
            data[3 * (l * subx + w) + 2] = z;
        }
    }

    let subdivisions = 100;

    let terrain = new BABYLON.DyanmicTerrain("t", {mapData: data, mapSubX: subx, mapSubZ: subz, terrainSub: subdivisions}, scene); // will throw an error, we have to create rendering components and player control, just gonna upload this because I'm tired

}

init();