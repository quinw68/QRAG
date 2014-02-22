/// <reference path="three_js/three.min.js" />
/// <reference path="../jquery-1.8.2.js" />
/// <reference path="Terrain/Terrain.js" />
/// <reference path="Renderer/Renderer.js" />
/// <reference path="Actors/Character.js" />
/// <reference path="Actors/Actor.js" />

$(function () {
    initGL();
    mainLoop();
});

// GLOBALS
CORE_PATH = "Scripts/Core/";
ACTORS = [];

function initGL() {
    RENDERER = new Renderer();
    SKY = new Sky();
    $('#scene').append(RENDERER.renderer.domElement);
    IO = new Input(RENDERER.renderer.domElement);

    MainChar = new Character();
    MainChar.init();
    TERRAIN = new Terrain();
    TERRAIN.InitTerrain(MainChar.position.x, MainChar.position.y);

    ACTORS.push(MainChar);
}

function mainLoop() {
    requestAnimationFrame(mainLoop);
    RENDERER.render();
}

