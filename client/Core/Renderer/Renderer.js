/// <reference path="../three_js/three.min.js" />
/// <reference path="../main.js" />
/// <reference path="../IO/Input.js" />

Renderer = function () {

    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    //this.camera = new THREE.OrthographicCamera(window.innWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 0.1, 2000);
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    //this.target = new THREE.Vector3(-10, 10, 0);
    this.render = function ()
    {
        for (var a in ACTORS)
        {
            ACTORS[a].update();
        }
        IO.controls.update();
        this.renderer.render(this.scene, this.camera);
    };
    this.camera.position.z = -5;
    this.camera.position.y = 5;
    this.renderer.setClearColor(0xffffff, 1);
    this.renderer.gammaInput = true;
    this.renderer.gammaOutput = true;
    this.renderer.physicallyBasedShading = true;
};
