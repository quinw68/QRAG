
Terrain = function (x, y)
{
    this.dae = null;
    this.tile_width = 100;
    this.scale = 10;

    var scope = this;
    var current_tile;

    var GetTileCoords = function(x, y){
        x = Math.floor(x/(scope.tile_width/2 * scope.scale));
        y = Math.floor(y/(scope.tile_width/2 * scope.scale));
        return {x: x, y: y};
    }

    this.InitTerrain = function (x, y)
    {
        var current_tile_coords = GetTileCoords(x, y);
        current_tile = new TerrainTile(current_tile_coords);
        current_tile.Load();
    }

    this.GetHeight = function(x, z)
    {
        if(current_tile.dae){
            var ray = new THREE.Raycaster(new THREE.Vector3(x, -10000, z), new THREE.Vector3(0, 1, 0));
            var where = ray.intersectObjects(current_tile.dae.children);
            if(where[0] == undefined) // if no height
            {
                return null;
            }
            return where[0].point.y;
        }
    }
}
