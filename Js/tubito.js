const scene = new THREE.Scene();
scene.background = new THREE.Color(0x25292A);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();//PARA MOSTRAR EN LA PANTALLA LA IMAGEN QUE SE RENDERIZA
renderer.setSize( window.innerWidth, window.innerHeight);//tamaño de la escena
document.body.appendChild( renderer.domElement );//llamar el JS del HTML

class CustomSinCurve extends THREE.Curve {

	constructor( scale = 1 ) {

		super();

		this.scale = scale;

	}

	getPoint( t, optionalTarget = new THREE.Vector3() ) {

		const tx = t * 3 - 1.5;
		const ty = Math.sin( 2 * Math.PI * t );
		const tz = 0;

		return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );

	}

}

const path = new CustomSinCurve( 10 );
const geometry = new THREE.TubeGeometry( path, 25, 5, 3);
/* const material = new THREE.MeshMatcapMaterial() */;
const TextureLoader = new THREE.TextureLoader();//Para cargar la textura
const matcap = TextureLoader.load ('../img/luna.jpg')
const material1 = new THREE.MeshMatcapMaterial();
material1.matcap = matcap;
material1.flatShading = true;
const TubeGeometry = new THREE.Mesh( geometry, material1 );
scene.add( TubeGeometry );

camera.position.z = 30;
camera.position.x = 0;
camera.position.y = 0;


//animacion
function animate() {
	requestAnimationFrame( animate );

	TubeGeometry.rotation.y += 0.02;
    TubeGeometry.rotation.x += 0.02;
    TubeGeometry.rotation.z += 0.05;

	renderer.render( scene, camera );
};
animate();