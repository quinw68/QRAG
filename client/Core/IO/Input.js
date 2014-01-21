/// <reference path="../three_js/three.min.js" />
/// <reference path="../main.js" />
/// <reference path="../Renderer/Renderer.js" />
/// <reference path="Mouse.js" />
/// <reference path="../three_js/js/controls/OrbitControls.js" />
/// <reference path="../three_js/js/controls/TrackballControls.js" />


Input = function (element)
{
    this.controls = new THREE.OrbitControls(RENDERER.camera, element);
    this.controls.minDistance = 0.5;
    this.mouse = new Mouse(element);
    this.keyboard = new Keyboard(element);
};
