/// <reference path="../three_js/three.min.js" />
/// <reference path="../main.js" />
/// <reference path="../IO/Input.js" />

Renderer = function () {
    var scope = this;
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.setAttribute('tabindex', '1');
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    this.render = function ()
    {
        for (var a in ACTORS)
        {
            if(ACTORS.hasOwnProperty(a)){
                ACTORS[a].update();
            }
        }
        IO.controls.update();
        this.renderer.render(this.scene, this.camera);
    };
    this.renderer.setClearColor(0xffffff, 1);
    this.renderer.physicallyBasedShading = true;

    // Resize function
    function windowResize(){
        scope.camera.aspect = window.innerWidth/ window.innerHeight;
        scope.camera.updateProjectionMatrix();

        scope.renderer.setSize( window.innerWidth, window.innerHeight );
    }
    window.addEventListener( 'resize', windowResize, false );
};
