let canv = document.getElementById("renderCanvas");
let engine = new BABYLON.Engine(canv, true);

const init = () => {

    // get a scene
    let scene = new BABYLON.Scene(engine);

    // camera
    let camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0, 0, 5), scene);

    // add draggable controls
    camera.attachControl(canv, true);

    // establish lights
    let light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    
    
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

    // set a basic material for now
    let mat = new BABYLON.StandardMaterial("materialGround", scene);
    mat.diffuseColor = new BABYLON.Color3(0.15, 0.9, 0.25);

    // create the terrain
    let terrain = new BABYLON.DynamicTerrain("t", {mapData: data, mapSubX: subx, mapSubZ: subz, terrainSub: subdivisions}, scene); 

    terrain.mesh.material = mat;


    return scene;
}

const render = () => {

    let scene = init();

    engine.runRenderLoop(() => {
        scene.render();
    });

    window.addEventListener("resize", () => {
        engine.resize();
    });

}

render();