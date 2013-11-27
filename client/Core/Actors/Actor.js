/// <reference path="../main.js" />
/// <reference path="../three_js" />

Actor = function()
{
    THREE.Object3D.apply(this, arguments);
};

Actor.prototype = new THREE.Object3D();
Actor.prototype.update = function ()
{
}
