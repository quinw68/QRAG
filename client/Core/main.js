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
CORE_PATH = "Scripts/Core/";
ACTORS = [];

function initGL() {
    RENDERER = new Renderer();
    TERRAIN = new Terrain();
    IO = new Input(RENDERER);
    $('#scene').append(RENDERER.renderer.domElement);
    
    TERRAIN.InitTerrain();
    MainChar = new Character();
    ACTORS.push(MainChar);
}

function mainLoop() {
    requestAnimationFrame(mainLoop);
    RENDERER.render();
}

