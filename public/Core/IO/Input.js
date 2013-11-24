/// <reference path="../three_js/three.min.js" />
/// <reference path="../main.js" />
/// <reference path="../Renderer/Renderer.js" />
/// <reference path="Mouse.js" />
/// <reference path="../three_js/js/controls/OrbitControls.js" />
/// <reference path="../three_js/js/controls/TrackballControls.js" />


Input = function ()
{
    this.controls = new THREE.OrbitControls(RENDERER.camera);
    
    //this.controls = new THREE.TrackballControls(RENDERER.camera);
    //this.controls.noPan = true;
    //this.controls.noRoll = true;
    this.controls.target.x = 10;
    this.controls.target.y = 10;

    this.mouse = new Mouse();
    this.keyboard = new Keyboard();
};
