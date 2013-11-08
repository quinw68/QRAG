/// <reference path="../three_js/three.min.js" />
/// <reference path="../main.js" />
/// <reference path="../Renderer/Renderer.js" />
/// <reference path="../three_js/js/loaders/OBJLoader.js" />
/// <reference path="../three_js/js/loaders/ColladaLoader.js" />

Terrain = function ()
{
    this.vertices = null;
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
            for (var i in dae.children)
            {
                if (dae.children[i] instanceof THREE.Mesh)
                {
                    scope.vertices = dae.children[i].geometry.vertices;
                }
            }
            
            RENDERER.scene.add(dae);
        });
    }
}