/// <reference path="three_js/three.min.js" />
/// <reference path="../jquery-1.8.2.js" />
/// <reference path="Terrain/Terrain.js" />
/// <reference path="Renderer/Renderer.js" />
/// <reference path="Actors/Character.js" />
/// <reference path="Actors/Actor.js" />

$(document).ready(function () {
    initGL();
    mainLoop();
});

// GLOBALS
var CORE_PATH = "Scripts/Core/";
var RENDERER;
var TERRAIN;
var IO;
var IDCOUNTER = 0;
var ACTORS = [];

function initGL() {
    RENDERER = new Renderer();
    TERRAIN = new Terrain();
    IO = new Input();
    $('#scene').append(RENDERER.renderer.domElement);
    
    TERRAIN.InitTerrain();
    MainChar = new Character();
    ACTORS.push(MainChar);
}

function mainLoop() {
    requestAnimationFrame(mainLoop);
    RENDERER.render();
}

