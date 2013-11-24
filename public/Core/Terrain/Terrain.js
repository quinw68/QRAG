/// <reference path="../three_js/three.min.js" />
/// <reference path="../main.js" />
/// <reference path="../Renderer/Renderer.js" />
/// <reference path="../three_js/js/loaders/OBJLoader.js" />
/// <reference path="../three_js/js/loaders/ColladaLoader.js" />

Terrain = function ()
{
    this.dae = null;
    var scope = this;
}

Terrain.prototype = {
    constructor: Terrain,

    InitTerrain: function () {
        this.LoadTerrain();
    },

    LoadTerrain: function ()
    {
        // model
        var dae, skin;
        var scope = this;
        var loader = new THREE.ColladaLoader();
        loader.options.convertUpAxis = true;
        loader.load('Assets/terrain.dae', function (collada) {

            dae = collada.scene;
            skin = collada.skins[0];

            dae.scale.x = dae.scale.y = dae.scale.z = 10;
            dae.updateMatrix();
            scope.dae = dae;
            RENDERER.scene.add(dae);
        });
    },
    
    GetHeight: function (x, z)
    {
        var ray = new THREE.Raycaster(new THREE.Vector3(x, -10000, z), new THREE.Vector3(0, 1, 0));
        var where = ray.intersectObjects(this.dae.children);
        return where[0].point.y;
    }
}