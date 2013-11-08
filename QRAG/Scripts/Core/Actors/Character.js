/// <reference path="Actor.js" />
/// <reference path="../IO/Keyboard.js" />
/// <reference path="../three_js" />

Character =  function()
{
    Actor.apply(this, arguments);
    scope = this;
    this.keyboard = IO.keyboard;
    this.rotation = 0;
    IO.controls.noKeys = true;
    this.forward = false;
    this.backward = false;
    this.left = false;
    this.right = false;
    this.sidestepleft = false;
    this.sidestepright = false;
    this.height = 5;
    IO.controls.target = this;
    IO.controls.maxDistance = 30;
    
    increment = function ()
    {

    }
    keydown = function (event)
    {
        switch(event.keyCode){
            case Keyboard.KEYS.w:
                scope.forward = true;
                break;
            case Keyboard.KEYS.s:
                scope.backward = true;
                break;
            case Keyboard.KEYS.a:
                scope.left = true;
                break;
            case Keyboard.KEYS.d:
                scope.right = true;
                break;
            case Keyboard.KEYS.q:
                scope.sidestepleft = true;
                break;
            case Keyboard.KEYS.e:
                scope.sidestepright = true;
        }
    }

    keyup = function (event)
    {
        switch (event.keyCode)
        {
            case Keyboard.KEYS.w:
                scope.forward = false;
                break;
            case Keyboard.KEYS.s:
                scope.backward = false;
                break;
            case Keyboard.KEYS.a:
                scope.left = false;
                break;
            case Keyboard.KEYS.d:
                scope.right = false;
                break;
            case Keyboard.KEYS.q:
                scope.sidestepleft = false;
                break;
            case Keyboard.KEYS.e:
                scope.sidestepright = false;
        }
    }

    // Slowly move the camera to behind the target
    this.updateCamera = function () {
        var diff = (scope.rotation - (IO.controls.theta + Math.PI)%(2*Math.PI)) % (2* Math.PI);
        if (Math.abs(diff) <= Math.PI / 20) {
            IO.controls.theta = (scope.rotation + Math.PI) % (2 * Math.PI);
            return;
        }
        if (diff >= 0) {
            IO.controls.theta += (Math.PI / 50) % (2*Math.PI);
        } else {
            IO.controls.theta -= (Math.PI / 50) % (2*Math.PI);
        }
    }

    this.keyboard.addListener(this.keyboard.EVENTS.KEYDOWN, keydown);
    this.keyboard.addListener(this.keyboard.EVENTS.KEYUP, keyup);
};

Character.prototype = new Actor();

Character.prototype.update = function ()
{
        
    if (scope.forward)
    {
        scope.translateZ(1);
        scope.updateCamera();
    }
    if (scope.right)
    {
        scope.rotation += -Math.PI / 100 % (2 * Math.PI);
        this.setRotationFromAxisAngle(new THREE.Vector3(0, 1, 0), scope.rotation);
        scope.updateCamera();
    }
    if (scope.left)
    {
        scope.rotation += Math.PI / 100 % (2 * Math.PI);
        this.setRotationFromAxisAngle(new THREE.Vector3(0, 1, 0), scope.rotation);
        scope.updateCamera();
    }
    if (scope.sidestepleft)
    {
        scope.translateX(1);
        RENDERER.camera.translateX(-1);
    }
    if (scope.sidestepright)
    {
        scope.translateX(-1);
        RENDERER.camera.translateX(1);
    }
    if (scope.backward)
    {
        scope.translateZ(-1);
        scope.updateCamera();
    }
}
