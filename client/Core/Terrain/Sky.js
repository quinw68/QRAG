
Sky = function(){
    var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1.25 );
    hemiLight.color.setHSL( 0.6, 1, 0.75 );
    hemiLight.groundColor.setHSL( 0.1, 0.8, 0.7 );
    hemiLight.position.y = 500;

    RENDERER.scene.add( hemiLight );
    RENDERER.scene.fog = new THREE.Fog(0xffffff, 100, 10000);
    var vertexShader = document.getElementById( 'vertexShader' ).textContent;
    var fragmentShader = document.getElementById( 'fragmentShader' ).textContent;
    var uniforms = {
        topColor: 	 { type: "c", value: new THREE.Color( 0x0077ff ) },
        bottomColor: { type: "c", value: new THREE.Color( 0xffffff ) },
        offset:		 { type: "f", value: 400 },
        exponent:	 { type: "f", value: 0.6 }
    }
    uniforms.topColor.value.copy( hemiLight.color );

    RENDERER.scene.fog.color.copy( uniforms.bottomColor.value );

    var skyGeo = new THREE.SphereGeometry( 4000, 32, 15 );
    var skyMat = new THREE.ShaderMaterial( { vertexShader: vertexShader, fragmentShader: fragmentShader, uniforms: uniforms, side: THREE.BackSide } );

    var sky = new THREE.Mesh( skyGeo, skyMat );
    RENDERER.scene.add( sky );
}
