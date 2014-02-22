/**
 * Created by Quin on 1/28/14.
 */

TerrainTile = function(tile_coord){
    if(typeof tile_coord.x != 'number' || typeof tile_coord.y != 'number')
    {
        throw "TerrainTile: tile_coord passed in was not in the correct format";
    }
    this.tile_coord = tile_coord;
    this.dae = null;

    var scope = this;


    this.Load = function()
    {
        var dae;
        var loader = new THREE.ColladaLoader();
        loader.options.convertUpAxis = true;
        loader.load('Assets/terrain_' + tile_coord.x + '_' + tile_coord.y + '.dae', function (collada) {
            dae = collada.scene;
            dae.scale.x = dae.scale.y = dae.scale.z = 10;
            dae.updateMatrix();
            scope.dae = dae;
            RENDERER.scene.add(scope.dae);
        });
    }

    this.Delete = function()
    {
        RENDERER.scene.remove(scope.dae);
    }
}
